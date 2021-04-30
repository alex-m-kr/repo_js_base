"use strict";

// Задание 1. 
/* Реализовать страницу корзины:
Добавить возможность не только смотреть состав корзины, но и редактировать его,
обновляя общую стоимость или выводя сообщение «Корзина пуста».
На странице корзины:
Сделать отдельные блоки «Состав корзины», «Адрес доставки», «Комментарий»;
Сделать эти поля сворачиваемыми;
Заполнять поля по очереди, то есть давать посмотреть состав корзины, внизу 
которого есть кнопка «Далее». Если нажать ее, сворачивается «Состав корзины» 
и открывается «Адрес доставки» и так далее. 
*/  

// доработанный вариант

const $basket = document.querySelector('#basket');
const $productsList = document.querySelector('#products-list');
const $popup = document.querySelector('#popup');
const $popupBasket = document.querySelector('#popup-basket');
const $popupAddress = document.querySelector('#popup-address');
const $popupComment = document.querySelector('#popup-comment');
const $popupBtn = document.querySelector('#popup-btn');

$popupBtn.insertAdjacentHTML('beforeend', '<button>Далее</button>');
$popupAddress.insertAdjacentHTML('beforeend', 'Адрес доставки <input type="text" placeholder="Адрес доставки">');
$popupComment.insertAdjacentHTML('beforeend', 'Комментарий <br><textarea cols="30" rows="3"></textarea>');


const basket = [];
const products = [];


function Product(title, price) {
    this.title = title;
    this.price = price;    
}

function BuyedProduct(title, price, quantity = 1) {
    this.title = title;
    this.price = price;
    this.quantity = quantity;
}

function getPrice(arr) {
    return arr.reduce(function (acc, product) {
        return  acc + (product.price * product.quantity);
    }, 0);
}

function getQuantity(arr) {
    return arr.reduce(function (acc, product) {
        return  acc + product.quantity;
    }, 0);
}

function drawBasket() {
    $basket.textContent = '';

    const elP = document.createElement('h3');

    if(basket.length !== 0) {
        elP.textContent = `В корзине ${getQuantity(basket)} товара(ов), на сумму\
        ${getPrice(basket)} рублей`;
    } else {
        elP.textContent = 'Корзина пуста';
    }
    
    $basket.append(elP);
}

function drawProducts() {
    products.forEach(function (product, i) {
                
        const html = `<div class="product"><h3>${product.title}</h3>\
        <p>${product.price}</p><button data-id="${i}">Купить</button><hr></div>`;
        $productsList.insertAdjacentHTML('beforeend', html);
    });
}

$productsList.addEventListener('click', function(e) {
    if ( e.target.tagName === 'BUTTON' ) {
        const id = Number(e.target.getAttribute('data-id'));
        const product = products[id];

        const uniqeId = basket.findIndex(function(item) {
            return product.title == item.title; 
        });

        if(uniqeId < 0) {
            basket.push(new BuyedProduct(product.title, product.price));
        } else {
            basket[uniqeId].quantity++;
        }

        console.log(uniqeId);
        console.log(basket);
        // console.log(e.target);

        drawBasket();
        popupBasket();
    }
});


function popupBasket() {
    $popupBasket.textContent = '';
    basket.forEach(function (basket, i) {                
        const html = `<div class="product"><h3>${basket.title}</h3><p>цена: \
        ${basket.price}, количество ${basket.quantity}, стоимость \
        ${basket.price * basket.quantity}</p><button data-id="${i}">+</button>\
        <button data-id="${i}">-</button><hr></div>`;
        $popupBasket.insertAdjacentHTML('beforeend', html);        
    });
    if (getQuantity(basket) < 1) {
        $popupBasket.textContent = 'Корзина пуста';
    }
}

// let flag = true; // экспериментировал, чтобы по кнопке появлялось/скрывалось
document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        // flag ? $popup.style.display = 'none' : $popup.style.display = 'block';
        // flag = !flag;
        $popup.style.display = 'none'
    }
});

$basket.addEventListener('click', function(e) {
    popupBasket();
    $popup.style.display = 'block';
});

let cntFlag = 1;
let flagBasket;
let flagAddress;
let flagComment;

function hideOrdisplay(obj, flag) {
    flag ? obj.style.display = 'block' : obj.style.display = 'none';
        
}

$popupBtn.addEventListener('click', function(e) {
    cntFlag++;
    if (cntFlag > 3) {
        cntFlag = 1;
    }

    if (cntFlag == 1) {
        flagBasket = true;
        flagAddress = false;
        flagComment = false;
    } else if (cntFlag == 2) {
        flagBasket = false;
        flagAddress = true;
        flagComment = false;
    } else if (cntFlag == 3) {
        flagBasket = false;
        flagAddress = false;
        flagComment = true;
    }    

    hideOrdisplay($popupBasket, flagBasket);
    hideOrdisplay($popupAddress, flagAddress);
    hideOrdisplay($popupComment, flagComment);
    // console.log(cntFlag, flagBasket, flagAddress, flagComment);    
});

$popupBasket.addEventListener('click', function(e) {
    if (e.target.tagName == 'BUTTON') {
        
        const id = Number(e.target.getAttribute('data-id'));
        const productInBasket = basket[id];
        if (e.target.textContent == '+') {
            basket[id].quantity++;            
        }

        if (e.target.textContent == '-') {
            if (basket[id].quantity > 0) basket[id].quantity--;                        
        }      
        drawBasket();
        popupBasket();  
        // console.log(e.target, e.target.textContent, id, productInBasket);        
    }

});


let product1 = new Product('Телефон', 1500);
let product2 = new Product('Планшет', 2000);
let product3 = new Product('Ноутбук', 10000);

products.push(product1); 
products.push(product2); 
products.push(product3); 


drawBasket();
drawProducts();
