import Leilao from "./Leilao";
import Usuario from "./Usuario";

export default class Lance {
    private comprador: Usuario
    private leilao: Leilao
    private valor: number

    constructor(comprador: Usuario, leilao: Leilao, valor: number) {
        this.comprador = comprador
        this.leilao = leilao
        this.valor = valor
    }

    public getUsuario(): Usuario {
        return this.comprador;
    }
    public setUsuario(value: Usuario) {
        this.comprador = value;
    }

    public getLeilao(): Leilao {
        return this.leilao;
    }
    public setLeilao(value: Leilao) {
        this.leilao = value;
    }

    public getValor(): number {
        return this.valor;
    }
    public setValor(value: number) {
        this.valor = value;
    }
}