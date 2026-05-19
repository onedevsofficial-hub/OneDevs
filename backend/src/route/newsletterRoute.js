import { Router } from "express";
import newsletterController from "../controller/newsletterController.js";

const router = Router()

router.get("", newsletterController.enviarEmail)

export default router