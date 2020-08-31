import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

//Cadastro de clientes ==>
const cliente001 = new Cliente("Coronilson Quarentenilson", 12345678923);
const cliente002 = new Cliente("Quarentenilson Doismilevintino", 32165498774);
const cliente003 = new Cliente("Covidelson Chinguelinguilson", 98745632114);

//Cadastro de contas correntes ==>
const conta003 = new ContaCorrente(cliente003, 2020);
const conta002 = new ContaCorrente(cliente002, 2019);
const conta001 = new ContaCorrente(cliente001, 114)

//Movimentações das contas ==>
conta003.depositar(500);
conta003.sacar(50);
conta003.transferir(100, conta001);
conta003.transferir(200, conta002);

//Impressões ==>
console.log(conta002);
console.log("\n");
console.log(conta003);
console.log("\n");
console.log(conta001);
console.log(`\n Número de contas cadastradas: ${ContaCorrente.numeroDeContas}`);

// console.log(`${JSON.stringify(conta003, null, 50)}`);
