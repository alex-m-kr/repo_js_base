"use strict";

// Задание 1. 
/* Продолжаем реализовывать модуль корзины:
Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» 
без перезагрузки страницы;
Привязать к событию покупки товара пересчет корзины и обновление ее 
внешнего вида. 
*/  

// пока успел попробовать только базовый вариант, вещь очень интересная,
// на праздниках должно появиться время заняться плотнее

const $basket = document.querySelector('#basket');
const $productsList = document.querySelector('#products-list');

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
    })
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
    }
});

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
