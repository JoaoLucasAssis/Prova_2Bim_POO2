import { PrismaClient } from "@prisma/client";
import Leilao from "../models/Leilao";

const prisma = new PrismaClient()

class LeilaoService {

    async insert(leilao: Leilao) {
        try {
            await prisma.leilao.create({
                data: {
                    produto: leilao.getProduto(),
                    preco: leilao.getPreco(),
                    dataLimite: leilao.getDataLimite(),
                    dono: {
                        connect: {
                            email: leilao.getDono().getEmail()
                        }
                    },
                    listaLances: leilao.getListaLances()
                }
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async update(produto: string, leilao: Leilao) {
        try {
            await prisma.leilao.update({
                where: { produto: produto },
                data: {
                    produto: leilao.getProduto(),
                    preco: leilao.getPreco(),
                    dataLimite: leilao.getDataLimite(),
                    dono: {
                        connect: {
                            email: leilao.getDono().getEmail()
                        }
                    },
                    listaLances: leilao.getListaLances()
                }
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async delete(produto: string) {
        try {
            await prisma.leilao.delete({
                where: { produto: produto },
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async getAll() {
        try {
            return await prisma.leilao.findMany();
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }
}

export default new LeilaoService();