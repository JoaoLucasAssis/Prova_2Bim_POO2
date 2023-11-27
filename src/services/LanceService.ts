import { PrismaClient } from "@prisma/client";
import Lance from "../models/Lance";

const prisma = new PrismaClient()

class LanceService {

    async insert(lance: Lance) {
        try {
            await prisma.lance.create({
                data: {
                    comprador: {
                        connect: {
                            email: lance.getUsuario().getEmail()
                        }
                    },
                    leilao: {
                        connect: {
                            produto: lance.getLeilao().getProduto()
                        }
                    },
                    valor: lance.getValor()
                }
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async update(valor: number, lance: Lance) {
        try {
            await prisma.lance.update({
                where: {
                    valor: valor,
                },
                data: {
                    comprador: {
                        connect: {
                            email: lance.getUsuario().getEmail()
                        }
                    },
                    leilao: {
                        connect: {
                            produto: lance.getLeilao().getProduto()
                        }
                    },
                    valor: lance.getValor()
                }
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async delete(valor: number) {
        try {
            await prisma.lance.delete({
                where: {
                    valor: valor,
                },
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async getAll() {
        try {
            return await prisma.lance.findMany();
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }
}

export default new LanceService();
