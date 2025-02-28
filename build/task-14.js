"use strict";
class Account {
    holder;
    accountNumber;
    balance;
    constructor(holder) {
        this.holder = holder;
        this.accountNumber = this.generateAccountNumber();
        this.balance = 0;
    }
    generateAccountNumber() {
        return Math.floor(Math.random() * 100000) + 1;
    }
    info() {
        console.log(`Holder: ${this.holder}`);
        console.log(`Account: ${this.accountNumber}`);
        console.log(`Balance: ${this.balance}`);
    }
    get viewBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
        else {
            console.log('Invalid value. The amount must be greater than zero.');
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log('Invalid withdrawal. Insufficient balance or amount must be greater than zero.');
        }
    }
}
class PFAccount extends Account {
    taxRate = 0.02;
    cpf;
    constructor(cpf, holder) {
        super(holder);
        this.cpf = cpf;
    }
    calculateTax(value) {
        return value * this.taxRate;
    }
    info() {
        console.log('----------------------');
        console.log('Type: PF');
        console.log(`CPF: ${this.cpf}`);
        super.info();
    }
    deposit(amount) {
        if (amount > 0 && amount <= 1000) {
            super.deposit(amount);
        }
        else {
            console.log('Invalid deposit. The amount must be between 1 and 1000.');
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            super.withdraw(amount);
        }
        else {
            console.log('Insufficient balance or invalid withdrawal amount.');
        }
    }
}
class PJAccount extends Account {
    cnpj;
    constructor(cnpj, holder) {
        super(holder);
        this.cnpj = cnpj;
    }
    info() {
        console.log('----------------------');
        console.log('Type: PJ');
        console.log(`CNPJ: ${this.cnpj}`);
        super.info();
    }
    deposit(amount) {
        if (amount > 0 && amount <= 10000) {
            super.deposit(amount);
        }
        else {
            console.log('Invalid deposit. The amount must be between 1 and 10,000.');
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            super.withdraw(amount);
        }
        else {
            console.log('Insufficient balance or invalid withdrawal amount.');
        }
    }
}
const client01 = new PFAccount(723, 'Rodrigo Sousa Luz');
const client02 = new PJAccount(105, 'Rilix Corp');
client01.deposit(800);
client01.withdraw(500);
client02.deposit(9000);
client02.withdraw(3500);
client01.info();
client02.info();
console.log('--------------------------------------------');
console.log(`The balance of ${client01.holder} is ${client01.viewBalance}.`);
console.log(`The balance of ${client02.holder} is ${client02.viewBalance}.`);
