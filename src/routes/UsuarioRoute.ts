import { Router } from "express";
import UsuarioController from "../controllers/UsuarioController";

const UsuarioRoute = Router();

UsuarioRoute.get("/", UsuarioController.getAll);

UsuarioRoute.post("/insert", UsuarioController.insert);

UsuarioRoute.patch("/update/:email", UsuarioController.update);

UsuarioRoute.delete("/delete/:email", UsuarioController.delete);

export default UsuarioRoute;