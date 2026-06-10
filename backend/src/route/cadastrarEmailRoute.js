import { Router } from "express";
import cadastrarEmailController from "../controller/cadastrarEmailControler.js";

const cadastrarEmailRouter = Router()

cadastrarEmailRouter.post("/newsletter/cadastrar", cadastrarEmailController.salvarEEnviarEmail);

export default cadastrarEmailRouter