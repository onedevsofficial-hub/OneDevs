import db from "../config/firebase.js"
import sendMail from "../config/nodemailer.js"

const cadastrarEmailController = {

    salvarEEnviarEmail: async (req, res) => {
        try {
            const { email } = req.body;

            if(!email) {
                return res.status(400).json({message: "O email é obrigatório"});
            }

            await db.collection('newsletter').add({
                email: email,
                status: "ativo",
                criadoEm: new Date()
            });

            const htmlBoasVindas = `Teste de mensagem`;

            await sendMail(email, "Bem-vindo ao OneDevsOS!", htmlBoasVindas);

            return res.status(201).json({ message: "Email cadastrado com sucesso"});

        } catch (error) {
            console.error("Erro ao enviar", error)
            return res.status(500).json({ message: "Erro interno ao cadastrar "})
            
        }
    }
};
export default cadastrarEmailController;