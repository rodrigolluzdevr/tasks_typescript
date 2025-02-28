"use strict";
class Machine {
    id;
    name;
    ram;
    ssd;
    isConnected;
    constructor(name, ram, ssd) {
        this.id = 0;
        this.name = name;
        this.ram = ram;
        this.ssd = ssd;
        this.isConnected = false;
    }
    getInfo() {
        return `
        Id: ${this.id}
        Nome: ${this.name}
        RAM: ${this.ram}GB
        SSD: ${this.ssd}GB
        Conectado: ${this.isConnected ? "Sim" : "Não"}
        ------------------------
        `;
    }
    connect() {
        this.isConnected = true;
    }
    disconnect() {
        this.isConnected = false;
    }
}
const machine1 = new Machine("Yasmin PC", 128, 512);
const machine2 = new Machine("Rodrigo PC", 248, 1024);
const machine3 = new Machine("Tarcisio PC", 358, 2024);
console.log(machine1.getInfo());
console.log(machine2.getInfo());
machine3.connect();
console.log(machine3.getInfo());
