// functions + methods interface

function login(user: string, password: string) :void{
    console.log(`user: ${user}`);
    console.log(`password: ${password}`);
}

login('rodrigo', 'Senha@123');

function division(n1: number, n2: number):number{
    let r= n1/n2;
    return r
}

let result_01: number = division(10, 2)
let result_02: string = division(100, 10).toString();

console.log(result_01)
console.log(result_02)