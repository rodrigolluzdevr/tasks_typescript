// Functions
function division(n1: number, n2: number): number {
    return n1 / n2;
}

function newUser(user: string, password: string, name?: string): void {
    const dados = {
        user,
        password,
        name,
    };
    console.log(dados);
}

function login(user: string, password: string): void {
    console.log(`user: ${user}`);
    console.log(`password: ${password}`);
}

// Exec
const result_01: number = division(10, 2);
const result_02: string = division(100, 10).toString();

console.log(typeof(result_01))
console.log(result_01);
console.log(typeof(result_02))
console.log(result_02);

newUser("yasmin", "Senha@123");

login("rodrigo", "Senha@123");
