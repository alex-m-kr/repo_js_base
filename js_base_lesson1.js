"use strict";

// Задание 1
console.log('Задание 1');
var temperatureF, temperatureC = 40;
temperatureF = (9 / 5) * temperatureC + 32;
console.log('Была задана температура по Цельсию: ' + temperatureC + ', по Фаренгейту это будет: ' + temperatureF);
temperatureC = -40;
temperatureF = (9 / 5) * temperatureC + 32;
console.log('Была задана температура по Цельсию: ' + temperatureC + ', по Фаренгейту это будет: ' + temperatureF);

// Задание 2
console.log('Задание 2');
var admin, name;
name = 'Василий';
admin = name;
console.log(admin);

// Задание 3
console.log('Задание 3');
console.log('Чему будет равно JS-выражение 1000 + "108"?');
console.log(1000 + "108");
// число 1000 будет преобразовано к строке и произойдет конкатенация, в итого будет склееная строка

// Задание 4
/* Async используется для того, чтобы указать браузеру, что скрипт может быть выполнен асинхронно.

Атрибут defer указывает браузеру, что скрипт должен быть выполнен после того, как HTML-документ будет полностью разобран. */
