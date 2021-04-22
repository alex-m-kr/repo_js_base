"use strict";

// Задание 1. 
/* Создать функцию, генерирующую шахматную доску. Можно использовать любые 
html-теги. Доска должна быть верно разлинована на черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами 
A, B, C, D, E, F, G, H. 
*/

// делал на основе методички, вижу, что не все конструкции оптимальны

function makeChessboard() {
    let numb = 8;
    let charA = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

    for (let i = 0; i < 4; ++i) {  // в цикле рисуется пара строк    

        let div3 = document.createElement("div");  //нумерация, цифры
            div3.className = "numeration";
            div3.innerHTML = numb;
            chessboard.appendChild(div3);
            numb--;

        for (let i = 0; i < 4; ++i) {  // одна строка клеток Ч Б
            let div1 = document.createElement("div");
            div1.className = "el_white";
            chessboard.appendChild(div1);

            let div2 = document.createElement("div");
            div2.className = "el_black";
            chessboard.appendChild(div2);
        }

        div3 = document.createElement("div");  //нумерация, цифры
        div3.className = "numeration";
        div3.innerHTML = numb;
        chessboard.appendChild(div3);
        numb--;

        for (let i = 0; i < 4; ++i) { // одна строка клеток Б Ч
            let div2 = document.createElement("div");
            div2.className = "el_black";
            chessboard.appendChild(div2);

            let div1 = document.createElement("div");
            div1.className = "el_white";
            chessboard.appendChild(div1);   
        }
    }

    for (let i = 0; i < 9; ++i) {  //нумерация, буквы

        let div3 = document.createElement("div");
        div3.className = "numeration";
        div3.innerHTML = charA[i];
        chessboard.appendChild(div3);        
    }
}

setTimeout(makeChessboard, 1000);        


// второй вариант с одним циклом мне понравился больше, но не хватило времени
// придумать, как сюда вставить нумерацию
function makeChessboard2() {   
    let flag;
    for (let i = 0; i < 64; ++i) {        
        if (i == 8 || i == 24 || i == 40 || i==56) {
            flag = false;        } 
        if (i == 0 || i == 16 || i == 32 || i==48) {
            flag = true;
        }
        let div1 = document.createElement("div");
        if (flag) {
            div1.className = "el_white2";
        } else {
            div1.className = "el_black2";
        }            
        chessboard.appendChild(div1);
        flag = !flag;
    }
}            

setTimeout(makeChessboard2, 2000);
