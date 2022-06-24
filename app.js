"use strict";
let button = document.getElementById('button'), input1 = document.getElementById('input1'), input2 = document.getElementById('input2');
function somarNumeros(num1, num2) {
    return num1 + num2;
}
if (button) {
    button.addEventListener('click', () => {
        if (input1 && input2) {
            console.log(somarNumeros(Number(input1.value), Number(input2.value)));
        }
    });
}
