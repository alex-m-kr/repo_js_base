"use strict";

// Задание 2. 
/* Сделать генерацию корзины динамической: верстка корзины не должна находиться
в HTML-структуре. Там должен быть только div, в который будет вставляться 
корзина, сгенерированная на базе JS:
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей». 
*/


//Взялся за задачу в последний день, поэтому не успел до конца разобраться, 
// как должна по замыслу задачи рабоать генерация.
// В общем сделал пока как смог, буду дальше разбираться.  

function Product(title, price) {
    this.title = title;
    this.price = price;
}

let product1 = new Product('Телефон', 1500);
let product2 = new Product('Планшет', 2000);
let product3 = new Product('Ноутбук', 10000);

let basket1 = {
    basket: [],
    countBasketPrice() {
    	if (this.basket.length == 0) {
    		return 'Корзина пуста'
    	}

        let sum = 0;

        for (let i of this.basket) {
            sum += i.price;            
        }
        return `В корзине: ${this.basket.length} товара(ов) на сумму ${sum} рублей`        
    }
};

let elem = document.getElementById('basket');

function showBasket() {
	elem.textContent = basket1.countBasketPrice();
}

showBasket()

basket1.basket.push(product1);
basket1.basket.push(product2);
basket1.basket.push(product3);

setTimeout(showBasket, 1000);
