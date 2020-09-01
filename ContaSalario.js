import { Conta } from "./Conta.js";

export class ContaSalario extends Conta {
    constructor(cliente){
        super(0, cliente, 114);
    }

    sacar(valor) {
        const taxa = 1;
        return this._sacar(valor, taxa);
    }
}