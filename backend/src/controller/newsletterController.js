import sendMail from "../config/nodemailer.js";

const newsletterController = {

    enviarEmail: async (req, res) => {
        try {
                const msg = await sendMail("onedevsofficial@gmail.com", "Titulo: Teste", "Html: Olá, Bem vindo ao OneDevs")
                res.status(200).json({message: "sucesso ao enviar email"})
                console.log(msg)
            } catch (error) {
                res.status(400).json({message: "erro ao enviar o email"})
                console.error("erro ao enviar o email", error)
            }
    }

}

export default newsletterController