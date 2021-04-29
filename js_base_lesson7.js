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

// в силу обстоятельств не хватило времени довести всё до ума
// надо дорабатывать, более полный вариант скину со следующим ДЗ


const $basket = document.querySelector('#basket');
const $productsList = document.querySelector('#products-list');
const $popup = document.querySelector('#popup');


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
        elP.textContent = `В корзине ${getQuantity(basket)} товара(ов), на сумму  ${getPrice(basket)} рублей`;
    } else {
        elP.textContent = 'Корзина пуста'
    }
    
    $basket.append(elP);
}

function drawProducts() {
    products.forEach(function (product, i) {
                
        const html = `<div class="product"><h3>${product.title}</h3><p>${product.price}</p><button data-id="${i}">Купить</button><hr></div>`;
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
        console.log(e.target);

        drawBasket();
        popupBasket();
    }
});



function popupBasket() {
    $popup.textContent = '';
    basket.forEach(function (basket, i) {                
        const html = `<div class="product"><h3>${basket.title}</h3><p>цена: ${basket.price}, количество ${basket.quantity}, стоимость ${basket.price * basket.quantity}</p><button data-id="${i}">+</button><hr></div>`;
        $popup.insertAdjacentHTML('beforeend', html);        
    });
    const html2 = 'Адрес доставки <input type="text" placeholder="Адрес доставки"><br>Комментарий <br><textarea cols="30" rows="3"></textarea><br><button class="btn">Отправить</button>';
    $popup.insertAdjacentHTML('beforeend', html2);

}

// let flag = true; // экспериментировал, чтобы по кнопке появлялось/скрывалось
document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape') {
        // flag ? $popup.style.display = 'none' : $popup.style.display = 'block';
        // flag = !flag;
        $popup.style.display = 'none'
    }
})

$basket.addEventListener('click', function(e) {
    popupBasket();
    $popup.style.display = 'block';
})



let product1 = new Product('Телефон', 1500);
let product2 = new Product('Планшет', 2000);
let product3 = new Product('Ноутбук', 10000);

products.push(product1); 
products.push(product2); 
products.push(product3); 

// let buy1 = new BuyedProduct('Телефон', 1500);
// let buy2 = new BuyedProduct('Планшет', 2000);
// let buy3 = new BuyedProduct('Ноутбук', 10000, 2);

// basket.push(buy1);
// basket.push(buy2);
// basket.push(buy3);

drawBasket();
drawProducts();
