import { Router } from "express";
import LeilaoController from "../controllers/LeilaoController";

const LeilaoRoute = Router();

LeilaoRoute.get("/", LeilaoController.getAll);

LeilaoRoute.post("/insert", LeilaoController.insert);

LeilaoRoute.patch("/update/:produto", LeilaoController.update);

LeilaoRoute.delete("/delete/:produto", LeilaoController.delete);

export default LeilaoRoute;