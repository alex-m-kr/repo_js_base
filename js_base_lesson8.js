"use strict";

// Задание. Не выполняя код, ответить, что выведет браузер и почему:

// Видимо задание взято отсюда:
// http://dmitry.baranovskiy.com/post/so-you-think-you-know-javascript
 
// if (!("a" in window)) {
//     var a = 1;
// }
// alert(a);

// результат будет "undefined", так if выдает false,
// соответственно переменная объявлена, но значение ей еще не присвоили.



// var b = function a(x) {
//     x && a(--x);
// };
// alert(a);

// так выдет просто ошибку Uncaught ReferenceError: a is not defined
//     at <anonymous>:6:7

// должно быть вероятно так
// var a = 1,
//     b = function a(x) {
//         x && a(--x);
//     };
// alert(a);
// выдаст "1"



// function a(x) {
//     return x * 2;
// }
// var a;
// alert(a);

// выдаст тело функции: 
// function a(x) {
//     return x * 2;
// }



function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
}
b(1, 2, 3);


*
function a() {
    alert(this);
}
a.call(null);





