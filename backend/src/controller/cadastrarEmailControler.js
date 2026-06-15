import Newsletter from "../config/newsletterSchema.js";
import sendMail from "../config/SendGrid.js";
import { getTemplateBoasVindas, getTextoBoasVindas } from "../templates/emailTemplates.js";

const cadastrarEmailController = {
  salvarEEnviarEmail: async (req, res) => {
    try {
      const { email } = req.body;

    
      if (!email) {
        return res.status(400).json({ message: "O email é obrigatório" });
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Formato de e-mail inválido" });
      }

      const emailFormatado = email.toLowerCase().trim();

   
      const emailExistente = await Newsletter.findOne({ email: emailFormatado });
      if (emailExistente) {
        return res.status(409).json({ message: "Este e-mail já está cadastrado!" });
      }

     
      await Newsletter.create({ email: emailFormatado });

      
      sendMail({
        to: emailFormatado,
        subject: "Boas vindas ao OneDevs OS!",
        html: getTemplateBoasVindas(),
        text: getTextoBoasVindas(),
      }).catch((err) => console.error("Erro em background ao enviar e-mail:", err));

      return res.status(201).json({ message: "Email cadastrado com sucesso e email enviado" });
      
    } catch (error) {
      console.error("Erro ao cadastrar e-mail:", error);
      return res.status(500).json({ message: "Erro interno ao cadastrar" });
    }
  },
};

export default cadastrarEmailController;