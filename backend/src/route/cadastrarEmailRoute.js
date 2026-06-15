import { Router } from "express";
import cadastrarEmailController from "../controller/cadastrarEmailController.js";
import contatoController from "../controller/contatoController.js";

const router = Router()

router.post("/newsletter/cadastrar", cadastrarEmailController.salvarEEnviarEmail);
router.post("/contato", contatoController.enviarMensagem)

export default router