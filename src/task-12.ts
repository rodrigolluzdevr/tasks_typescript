// Rest Parameters
function fSoma(...n: number[]) {
    let soma: number = 0;
    n.forEach((num) => {
        soma += num;
    });
    return soma;
}

function xSoma(...n: number[]) {
    let soma: number = 0;
    for (let num of n) {
        soma += num;
    }
    return soma;
}

console.log(fSoma(10, 20, 30));
console.log(xSoma(10, 20, 30));