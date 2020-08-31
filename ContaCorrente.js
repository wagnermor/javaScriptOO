import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;
    
    _cliente;
    // #saldo = 0 https://github.com/tc39/proposital-class-fields#private-fields
    _saldo = 0; 
    
    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(cliente, agencia) {
        this.cliente = cliente;//Como _cliente já foi instanciado, não precisa utilizar o atributo privado "_cliente".
        this.agencia = agencia;
        ContaCorrente.numeroDeContas += 1;
    }
    

    sacar(valor) {
        if(this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if(this.valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}