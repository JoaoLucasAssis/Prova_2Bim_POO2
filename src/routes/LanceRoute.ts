import { Router } from "express";
import LanceController from "../controllers/LanceController";

const LanceRoute = Router();

LanceRoute.get("/", LanceController.getAll);

LanceRoute.post("/insert", LanceController.insert);

LanceRoute.patch("/update/:valor", LanceController.update);

LanceRoute.delete("/delete/:valor", LanceController.delete);

export default LanceRoute;