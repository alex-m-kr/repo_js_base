"use strict";

// Задание 1. Почему код дает именно такие результаты?

// var a = 1, b = 1, c, d;

// c = ++a; alert(c);           // 2 -  в префиксной форме записи 
// инкрементирование произошло сразу и вернулось уже увеличенное на 1 
// значение "a"

// d = b++; alert(d);           // 1 - здесь постфиксная форма записи, сперва 
// возврат значения, потом инкрементирование

// c = (2+ ++a); alert(c);      // 5 - снача "a" было 1, после инкремента 2, 
// потом префиксный инкремент вернул 3, в резульате 2 + 3

// d = (2+ b++); alert(d);      // 4 - здесь в отличие от предыдущего примера
// постфиксная запись, поэтому "b" увеличилось на 1, 
// но вернулось старое значение 2

// alert(a);                    // 3 - первоначально "a"=1, потом два инкремента
// alert(b);                    // 3 - аналогично с "b"


// Задание 2. Чему будет равен x?
console.log('Задание 2'); 
var A = 2;
var X = 1 + (A *= 2);
console.log(X);
// ответ будет 5, сперва действие в скобках, "a" стало равным старому значению 
// умноженному на 2, т.е. 4. Потом 1 плюс 4 = 5


// Задание 3. Объявить две целочисленные переменные — a и b и задать им 
// произвольные начальные значения. Затем написать скрипт, который работает 
// по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму;
// Ноль можно считать положительным числом
console.log('Задание 3');
let a = -7;
let b = 3;
if (a >= 0 && b >= 0) {
    console.log('разность ' + (a - b));
} else if (a <0 && b <0) {
    console.log('произведение ' + (a * b));
} else {
    console.log('сумма ' + (a + b));
}


// Задание 4. Присвоить переменной а значение в промежутке [0..15]. 
// С помощью оператора switch организовать вывод чисел от a до 15.
console.log('Задание 4');
a = 12;
switch (a) {
    case 0: console.log(0);
    case 1: console.log(1);
    case 2: console.log(2);
    case 3: console.log(3);
    case 4: console.log(4);
    case 5: console.log(5);
    case 6: console.log(6);
    case 7: console.log(7);
    case 8: console.log(8);
    case 9: console.log(9);
    case 10: console.log(10);
    case 11: console.log(11);
    case 12: console.log(12);
    case 13: console.log(13);
    case 14: console.log(14);
    case 15: console.log(15);
        break;
    default: 
        console.log('Введены неверные данные');
        break;
}


// Задание 5. Реализовать четыре основные арифметические операции в виде функций 
// с двумя параметрами. Обязательно использовать оператор return.
console.log('Задание 5');

function sum(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiplication(x, y) {
    return x * y;
}

function division(x, y) {
    if (y == 0) {        
        return 'Произойдет деление на ноль';
    }
    return x / y;
}

let op1 = 5;
let op2 = 2;
console.log(sum(op1, op2));
console.log(subtract(op1, op2));
console.log(multiplication(op1, op2));
console.log(division(op1, op2));


// Задание 6. Реализовать функцию с тремя параметрами: 
// function mathOperation(arg1, arg2, operation), где arg1, arg2 — значения 
// аргументов, operation — строка с названием операции. В зависимости от 
// переданного значения выполнить одну из арифметических операций (использовать 
// функции из пункта 5) и вернуть полученное значение (применить switch).

console.log('Задание 6');
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return sum(arg1, arg2);
            break;
        case 'вычитание':
            return subtract(arg1, arg2);
            break;
        case 'умножение':
            return multiplication(arg1, arg2);
            break;
        case 'деление':
            return division(arg1, arg2);
            break;
        default:
            return 'Неверные данные';
            break;
    }
}
console.log(mathOperation(1, 2, 'сложение'));
console.log(mathOperation(3, 4, 'вычитание'));
console.log(mathOperation(5, 6, 'умножение'));
console.log(mathOperation(10, 3, 'деление'));
console.log(mathOperation(1, 2, 'синус'));


// Задание 7. * Сравнить null и 0. Объяснить результат.
console.log('Задание 7');
console.log(null == 0 );  //false
// null при не строгом сравнении равен только undefined, 
// но не чему бы то ни было еще (из методички)
console.log(+null == 0 );  //а так должно быть true
// При явном преобразовании в число  null принимает значение 0


// Задание 8. * С помощью рекурсии организовать функцию возведения числа 
// в степень. Формат: function power(val, pow), 
// где val — заданное число, pow –— степень.
console.log('Задание 8');

function power(val, pow) {
    if (pow == 0) {
        return 1;
    }
    if (pow == 1) {
        return val;
    }
    if (pow > 0) {
        return val * power(val, pow - 1);
    }
    if (pow < 0) {
        return 1 / (val * power(val, -pow - 1));
    }
}

console.log(power(10, 4));
console.log(power(10, -4));
