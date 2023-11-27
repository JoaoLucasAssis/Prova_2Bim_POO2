import { PrismaClient } from "@prisma/client";
import Usuario from "../models/Usuario";

const prisma = new PrismaClient()

class UsuarioService {

    async insert(usuario: Usuario) {
        try {
            await prisma.usuario.create({
                data: {
                    nome: usuario.getNome(),
                    email: usuario.getEmail(),
                }
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async update(email: string, usuario: Usuario) {
        try {
            await prisma.usuario.update({
                where: { email: email },
                data: {
                    nome: usuario.getNome(),
                    email: usuario.getEmail(),
                }
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async delete(email: string) {
        try {
            await prisma.usuario.delete({
                where: { email: email },
            });
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }

    async getAll() {
        try {
            return await prisma.usuario.findMany();
        } catch (error) {
            console.log(error)
            await prisma.$disconnect()
            process.exit(1)
        }
    }
}

export default new UsuarioService();