"use strict";
function login(user, password) {
    console.log(`user: ${user}`);
    console.log(`password: ${password}`);
}
login('rodrigo', 'Senha@123');
function division(n1, n2) {
    let r = n1 / n2;
    return r;
}
let result_01 = division(10, 2);
let result_02 = division(100, 10).toString();
console.log(result_01);
console.log(result_02);
