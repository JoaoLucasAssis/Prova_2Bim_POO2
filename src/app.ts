import express from 'express';
import LanceRoute from './routes/LanceRoute';
import LeilaoRoute from './routes/LeilaoRoute';
import UsuarioRoute from './routes/UsuarioRoute';

export default class App {

    private app: express.Application;
    private port = 8080;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.routes();
        this.listen();
    }

    public getApp(): express.Application {
        return this.app;
    }

    private listen(): void {
        this.app.listen(this.port, () => console.log("servidor iniciado na porta " + this.port));
    }

    private routes(): void {
        this.app.use("/usuario", UsuarioRoute);
        this.app.use("/leilao", LeilaoRoute);
        this.app.use("/lance", LanceRoute);
    }
}
