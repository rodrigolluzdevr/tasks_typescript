"use strict";
function division(n1, n2) {
    return n1 / n2;
}
function login(user, password) {
    console.log(`user: ${user}`);
    console.log(`password: ${password}`);
}
function newUser(user, pass, name) {
    const dados = {
        user,
        pass,
        name,
    };
    console.log(dados);
}
const result01 = division(10, 2);
const result02 = division(100, 10).toString();
console.log(result01);
console.log(result02);
login("rodrigo", "Senha@123");
newUser("yasmin", "Senha@123");
