import { Conta } from "./Conta.js";


export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    constructor(cliente, agencia) {
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    // O método está sobrescrevendo o comportamento de sacar
    sacar(valor) {
        const taxa = 1.1;
        return this._sacar(valor, taxa);
    }
}