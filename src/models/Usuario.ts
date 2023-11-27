export default class Usuario {
    private nome: string
    private email: string

    constructor(nome: string, email: string) {
        this.nome = nome
        this.email = email
    }

    public getNome(): string {
        return this.nome;
    }
    public setNome(value: string) {
        this.nome = value;
    }

    public getEmail(): string {
        return this.email;
    }
    public setEmail(value: string) {
        this.email = value;
    }
}