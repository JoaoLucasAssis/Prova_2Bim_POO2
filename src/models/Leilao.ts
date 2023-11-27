import Usuario from "./Usuario";

export default class Leilao {
    private produto: string
    private preco: number
    private dataLimite: Date
    private dono: Usuario
    private listaLances: string

    constructor(produto: string, preco: number, dataLimite: Date, dono: Usuario, listaLances: string) {
        this.produto = produto
        this.preco = preco
        this.dataLimite = dataLimite
        this.dono = dono
        this.listaLances = listaLances
    }

    public getProduto(): string {
        return this.produto;
    }
    public setProduto(value: string) {
        this.produto = value;
    }

    public getPreco(): number {
        return this.preco;
    }
    public setPreco(value: number) {
        this.preco = value;
    }

    public getDataLimite(): Date {
        return this.dataLimite;
    }
    public setDataLimite(value: Date) {
        this.dataLimite = value;
    }

    public getDono(): Usuario {
        return this.dono;
    }
    public setDono(value: Usuario) {
        this.dono = value;
    }

    public getListaLances(): string {
        return this.listaLances;
    }
    public setListaLances(value: string) {
        this.listaLances = value;
    }
}