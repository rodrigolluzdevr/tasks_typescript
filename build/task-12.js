"use strict";
function fSoma(...n) {
    let soma = 0;
    n.forEach((num) => {
        soma += num;
    });
    return soma;
}
function xSoma(...n) {
    let soma = 0;
    for (let num of n) {
        soma += num;
    }
    return soma;
}
console.log(fSoma(10, 20, 30));
console.log(xSoma(10, 20, 30));
