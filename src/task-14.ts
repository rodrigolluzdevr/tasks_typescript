// Bank Operations
abstract class Account {
  public holder: string;
  private readonly accountNumber: number;
  protected balance: number;

  constructor(holder: string) {
    this.holder = holder;
    this.accountNumber = this.generateAccountNumber();
    this.balance = 0;
  }

  private generateAccountNumber(): number {
    return Math.floor(Math.random() * 100000) + 1;
  }

  public info(): void {
    console.log(`Holder: ${this.holder}`);
    console.log(`Account: ${this.accountNumber}`);
    console.log(`Balance: ${this.balance}`);
  }

  get viewBalance(): number {
    return this.balance;
  }

  protected deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.log('Invalid value. The amount must be greater than zero.');
    }
  }

  protected withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log('Invalid withdrawal. Insufficient balance or amount must be greater than zero.');
    }
  }
}

interface Tax {
  taxRate: number;
  calculateTax(value: number): number;
}

class PFAccount extends Account implements Tax {
  public taxRate: number = 0.02;
  public cpf: number;

  constructor(cpf: number, holder: string) {
    super(holder);
    this.cpf = cpf;
  }

  public calculateTax(value: number): number {
    return value * this.taxRate;
  }

  public info(): void {
    console.log('----------------------');
    console.log('Type: PF');
    console.log(`CPF: ${this.cpf}`);
    super.info();
  }

  public deposit(amount: number): void {
    if (amount > 0 && amount <= 1000) {
      super.deposit(amount);
    } else {
      console.log('Invalid deposit. The amount must be between 1 and 1000.');
    }
  }

  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      super.withdraw(amount);
    } else {
      console.log('Insufficient balance or invalid withdrawal amount.');
    }
  }
}

class PJAccount extends Account {
  public cnpj: number;

  constructor(cnpj: number, holder: string) {
    super(holder);
    this.cnpj = cnpj;
  }

  public info(): void {
    console.log('----------------------');
    console.log('Type: PJ');
    console.log(`CNPJ: ${this.cnpj}`);
    super.info();
  }

  public deposit(amount: number): void {
    if (amount > 0 && amount <= 10000) {
      super.deposit(amount);
    } else {
      console.log('Invalid deposit. The amount must be between 1 and 10,000.');
    }
  }

  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      super.withdraw(amount);
    } else {
      console.log('Insufficient balance or invalid withdrawal amount.');
    }
  }
}

// Clients
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
