"use strict";

// Задание 1. 
// Написать функцию, преобразующую число в объект. Передавая на вход число 
// от 0 до 999, надо получить на выходе объект, в котором в соответствующих 
// свойствах описаны единицы, десятки и сотни. Например, для числа 245 надо 
// получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
// Если число превышает 999, необходимо выдать соответствующее сообщение 
// с помощью console.log и вернуть пустой объект.

console.log('Задание 1');

function numToObj(numb) {
    let obj;
    if (numb > 999) {
        obj = {
        };
        console.log('Число больше 999');
    } else {
        obj = {
        единицы: numb % 10,  //вроде русский язык не создал проблем, но лучше англ.
        десятки: (numb - numb % 10) / 10 % 10,
        сотни: (numb - numb % 100) / 100 % 10        
        };
    }    
    return obj;
}

console.log(numToObj(123));
console.log(numToObj(1000));


// Задание 2. 
// Продолжить работу с интернет-магазином:
// В прошлом домашнем задании вы реализовали корзину на базе массивов. 
// Какими объектами можно заменить их элементы?
// Реализуйте такие объекты.
// Перенести функционал подсчета корзины на объектно-ориентированную базу.
console.log('Задание 2');

function Product(title, price) {
    this.title = title;
    this.price = price;
}

let product1 = new Product('Телефон', 1500);
let product2 = new Product('Планшет', 2000);
let product3 = new Product('Ноутбук', 10000);

// console.log(product1);

// старый вариант
// let product1 = {
//     title: "Телефон",
//     price: 1500
// };
// let product2 = {
//     title: "Планшет",
//     price: 2000
// };
// let product3 = {
//     title: "Ноутбук",
//     price: 10000
// };

// как "засунуть" в функцию-конструктор метод, пока не понял

let basket1 = {
    basket: [],
    countBasketPrice() {
        let sum = 0;
        console.log('Товаров в корзине:', this.basket.length);
        for (let i of this.basket) {
            sum += i.price;
            console.log('название:', i.title, 'цена:', i.price);
        }
        console.log('текущая стоимость корзины:', sum);
    }
};

basket1.countBasketPrice();
basket1.basket.push(product1);
basket1.countBasketPrice();
basket1.basket.push(product2);
basket1.countBasketPrice();
basket1.basket.push(product3);
basket1.countBasketPrice();
basket1.basket.pop();
basket1.countBasketPrice();
