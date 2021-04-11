"use strict";

// Задание 1. С помощью цикла while вывести все простые числа 
// в промежутке от 0 до 100.
console.log('Задание 1'); 
let i = 2, cnt = 0;
while (i <= 100) {
    let j = 2;
    let flag = true;    
    while (j < i) {
        if (i % j == 0) {
            flag = false;
            break;
        }
        ++j;        
    }
    if (flag) {
        console.log(i);
        ++cnt;
    }
    ++i;
}
console.log('простых чисел от 1 до 100:', cnt);


// Задание 2, 3. Нужно реализовать функционал подсчета стоимости корзины в
// зависимости от находящихся в ней товаров
console.log('Задание 2, 3'); 
let numbers = [2, 3, 5, 7, 11, 12];

function countBasketPrice(a) {
    let sum = 0;
    for (let i = 0; i < a.length; ++i) {
        sum += a[i];
    }
    return sum;
}

function countBasketPrice2(a) {
    let sum = 0;
    for (let i in a) {
        // console.log(i);
        sum += a[i];
    }
    return sum;
}

console.log('текущая стоимость корзины:', countBasketPrice(numbers));
console.log('текущая стоимость корзины:', countBasketPrice2(numbers));


// Задание 4. * Вывести с помощью цикла for числа от 0 до 9, 
// не используя тело цикла
console.log('Задание 4');
for (let i = 0; i <=9; console.log(i), i++) {

} 


// Задание 5. * Нарисовать пирамиду с 20 рядами с помощью console.log
console.log('Задание 5');
for (let i = 1; i <=20; ++i) {
    let a = [];
    for (let j = 1; j <= i; ++j) {
        a.push('x');
    } 
    console.log(a.join(''));
}
