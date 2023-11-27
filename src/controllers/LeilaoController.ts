import express from 'express';
import Leilao from '../models/Leilao';
import Usuario from '../models/Usuario';
import LeilaoService from '../services/LeilaoService';

class LeilaoController {

    public async insert(req: express.Request, res: express.Response) {

        try {
            const {produto, preco, dono, listaLances } = req.body;

            const leilao = await LeilaoService.insert(
                new Leilao(
                    produto, 
                    preco, 
                    new Date(),
                    new Usuario(dono.nome, dono.email), 
                    listaLances
            ));

            return res.json(leilao);
        } catch (error) {
            console.log(error);
        }
    }

    public async update(req: express.Request, res: express.Response) {

        try {
            const antigoProduto = req.params.produto;
            const {produto, preco, dono, listaLances } = req.body;

            const leilao = await LeilaoService.update(
                antigoProduto, 
                new Leilao(
                    produto, 
                    preco, 
                    new Date(),
                    new Usuario(dono.nome, dono.email), 
                    listaLances
            ));

            return res.json(leilao);
        } catch (error) {
            console.log(error);
        }
    }

    public async delete(req: express.Request, res: express.Response) {

        try {
            const produto = req.params.produto;

            const leilao = await LeilaoService.delete(produto);

            return res.json(leilao);
        } catch (error) {
            console.log(error);
        }
    }

    public async getAll(req: express.Request, res: express.Response) {

        try {
            const leiloes = await LeilaoService.getAll();

            return res.status(200).json({
                leiloes: leiloes
            })
        } catch (error) {
            console.log(error);
        }
    }
}

export default new LeilaoController();