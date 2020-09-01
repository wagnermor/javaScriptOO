import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";
import { Conta } from "./Conta.js";

//Cadastro de clientes ==>
const cliente001 = new Cliente("Covidelson Doismilevintino", 12345678923);

//Cadastro de contas correntes ==>
const conta001C = new ContaCorrente(0, cliente001, 114)

//Cadastro de conta poupança
const conta001P = new ContaPoupanca(0, cliente001, 114);

const conta = new Conta(0, "Quarentenilson Chinguiloidino", 171);

//Movimentações das contas ==>
conta001C.depositar(1000);
conta001C.sacar(100);

conta001P.depositar(1000);
conta001P.sacar(100);

//Impressões ==>
console.log("\n");
console.log(conta001C);
console.log("\n");
console.log(conta001P);
console.log("\n");
// console.log(conta);

console.log(`\n Número de contas cadastradas: ${ContaCorrente.numeroDeContas}`);

// console.log(`${JSON.stringify(conta001, null, 50)}`);
