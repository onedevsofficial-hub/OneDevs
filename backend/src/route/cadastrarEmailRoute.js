import { Router } from "express";
import cadastrarEmailController from "../controller/cadastrarEmailControler.js";

const cadastrarEmailRouter = Router()

// cadastrarEmailRouter.get("/firebase", async (req, res) => {
//     const snapshot = await db.collection('newsletter').get();
//     const dados = snapshot.docs.map(doc => doc.data());
//     res.json(dados);
// })

cadastrarEmailRouter.post("/newsletter/cadastrar", cadastrarEmailController.salvarEEnviarEmail);

export default cadastrarEmailRouter