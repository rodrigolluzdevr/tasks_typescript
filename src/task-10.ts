// Functions
function division(n1: number, n2: number): number {
    return n1 / n2;
}

function login(user: string, password: string): void {
    console.log(`user: ${user}`);
    console.log(`password: ${password}`);
}

function newUser(user: string, pass: string, name?: string): void {
    const dados = {
        user,
        pass,
        name,
    };
    console.log(dados);
}

// Exec
const result01: number = division(10, 2);
const result02: string = division(100, 10).toString();

console.log(result01);
console.log(result02);

login("rodrigo", "Senha@123");

newUser("yasmin", "Senha@123");
