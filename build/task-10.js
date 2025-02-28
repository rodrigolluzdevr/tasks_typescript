"use strict";
function division(n1, n2) {
    return n1 / n2;
}
function newUser(user, password, name) {
    const dados = {
        user,
        password,
        name,
    };
    console.log(dados);
}
function login(user, password) {
    console.log(`user: ${user}`);
    console.log(`password: ${password}`);
}
const result_01 = division(10, 2);
const result_02 = division(100, 10).toString();
console.log(typeof (result_01));
console.log(result_01);
console.log(typeof (result_02));
console.log(result_02);
newUser("yasmin", "Senha@123");
login("rodrigo", "Senha@123");
