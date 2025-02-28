// Bank Operations
abstract class Account {
    public holder: string;
    private readonly accountNumber: number;
    protected valueAccount: number;
  
    constructor(holder: string) {
      this.holder = holder;
      this.accountNumber = this.generateAccountNumber();
      this.valueAccount = 0;
    }
  
    private generateAccountNumber(): number {
      return Math.floor(Math.random() * 100000) + 1;
    }
  
    public info(): void {
      console.log(`Holder: ${this.holder}`);
      console.log(`Account: ${this.accountNumber}`);
      console.log(`Balance: ${this.valueAccount}`);
    }
  
    get viewBalance(): number {
      return this.valueAccount;
    }
  
    protected deposit(amount: number): void {
      if (amount > 0) {
        this.valueAccount += amount;
      } else if (amount > 1000){
        console.log('Value invalid, the operation limit for PF has to be less than 1000.');
      } else {
        console.log('The value entered is invalid, the value is less than zero.');
      }
    }
    
    protected withdrawal(amount: number): void {
        if (amount < this.valueAccount) {
          this.valueAccount -= amount;
        } else {
          console.log('the value entered is invalid, is higher than the value in account.');
        }
      }
  }
  
  class PFAccount extends Account {
    public cpf: number;
  
    constructor(cpf: number, holder: string) {
      super(holder);
      this.cpf = cpf;
    }
  
    public info(): void {
      console.log('----------------------');
      console.log('Tipo: PF');
      console.log(`CPF: ${this.cpf}`);
      super.info();
    }
  
    public deposit(amount: number): void {
        if (amount > 0 && amount < 1000) {
          super.deposit(amount);
        } else {
          console.log('Value invalid, he value entered has to be greater than zero and less than 1000.');
        }
    }
    
    public withdrawal (amount: number) {
        if (amount < this.valueAccount) {
            super.withdrawal(amount);
        } else {
            console.log('Insufficient balance.');
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
      console.log('Tipo: PJ');
      console.log(`CNPJ: ${this.cnpj}`);
      super.info();
    }
  
    public deposit(amount: number): void {
      if (amount > 0 && amount < 10000) {
        super.deposit(amount);
      } else {
        console.log('Value invalid, he value entered has to be greater than zero and less than 10000.');
      }
    }

    public withdrawal (amount: number) {
        if (amount < this.valueAccount) {
            super.withdrawal(amount);
        } else {
            console.log('Insufficient balance.');
        }
    }
  }
  
const client01 = new PFAccount(723, 'Rodrigo Sousa Luz');
const client02 = new PJAccount(105, 'Rilix Corp');

client01.deposit(800);
client01.withdrawal(500);

client02.deposit(9000);
client02.withdrawal(3500);

client01.info();
client02.info();

console.log('--------------------------------------------')

console.log(`The value of the ${client01.holder} is ${client01.viewBalance}.`);
console.log(`The value of the ${client02.holder} is ${client02.viewBalance}.`);