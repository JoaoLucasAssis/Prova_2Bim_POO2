import express from 'express';
import Usuario from '../models/Usuario';
import UsuarioService from '../services/UsuarioService';

class UsuarioController {

    public async insert(req: express.Request, res: express.Response) {

        try {
            const { nome, email } = req.body;

            const usuario = await UsuarioService.insert(new Usuario(nome, email));

            return res.json(usuario);
        } catch (error) {
            console.log(error);
        }
    }

    public async update(req: express.Request, res: express.Response) {

        try {
            const antigoEmail = req.params.email;
            const { nome, email } = req.body;

            const usuario = await UsuarioService.update(antigoEmail, new Usuario(nome, email));

            return res.json(usuario);
        } catch (error) {
            console.log(error);
        }
    }

    public async delete(req: express.Request, res: express.Response) {

        try {
            const email = req.params.email;

            const usuario = await UsuarioService.delete(email);

            return res.json(usuario);
        } catch (error) {
            console.log(error);
        }
    }

    public async getAll(req: express.Request, res: express.Response) {

        try {
            const usuarios = await UsuarioService.getAll();

            return res.status(200).json({
                status: "ok",
                usuarios: usuarios
            });
        } catch (error) {
            console.log(error);
        }
    }
}

export default new UsuarioController();