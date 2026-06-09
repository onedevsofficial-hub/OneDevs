import Newsletter from "../config/newsletterSchema.js";
import sendMail from "../config/nodemailer.js";

const cadastrarEmailController = {

    salvarEEnviarEmail: async (req, res) => {
        try {
            const { email } = req.body;

            // 1. Validação de presença
            if (!email) {
                return res.status(400).json({ message: "O email é obrigatório" });
            }

            // 2. Validação de formato (Regex)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                return res.status(400).json({ message: "Formato de e-mail inválido" });
            }

            // 3. Consulta no MongoDB
            const emailExistente = await Newsletter.findOne({ email: email.toLowerCase().trim() });

            if (emailExistente) {
                return res.status(409).json({ message: "Este e-mail já está cadastrado!" });
            }

            // 4. Criação no MongoDB
            await Newsletter.create({
                email: email.toLowerCase().trim()
            });

            // Template HTML do seu e-mail
            const htmlBoasVindas = `
            <!DOCTYPE html>
            <html lang="pt-BR">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Bem-vindo ao OneDevs OS</title>
            </head>
            <body style="margin: 0; padding: 0; background-color: #0d1b2a; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #ffffff; -webkit-font-smoothing: antialiased;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0d1b2a; padding: 40px 10px;">
                    <tr>
                        <td align="center">
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: #1a0252; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.5);">
                                <tr>
                                    <td align="center" style="padding: 40px 40px 20px 40px; border-bottom: 2px solid #4fc3f7;">
                                        <h1 style="margin: 0; color: #4fc3f7; font-size: 28px; font-weight: 700; letter-spacing: 1px;">OneDevs <span style="color: #ffffff; font-weight: 300;">OS</span></h1>
                                        <p style="margin: 10px 0 0 0; color: #a0aec0; font-size: 14px; text-transform: uppercase; letter-spacing: 2px;">O ecossistema dos desenvolvedores</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding: 40px;">
                                        <h2 style="margin: 0 0 20px 0; color: #ffffff; font-size: 22px; font-weight: 600;">Olá, dev! 🚀</h2>
                                        <p style="margin: 0 0 16px 0; color: #e2e8f0; font-size: 15px; line-height: 1.6;">
                                            Que bom ter você por aqui! Seu e-mail foi cadastrado com sucesso na nossa newsletter oficial do <strong>OneDevs OS</strong>.
                                        </p>
                                        <p style="margin: 0 0 24px 0; color: #e2e8f0; font-size: 15px; line-height: 1.6;">
                                            A partir de agora, você está conectado com o coração do nosso sistema operacional. Você receberá em primeira mão atualizações do sistema, novos recursos de UX/UI, dicas de performance e builds exclusivas.
                                        </p>
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #0d1b2a; border-radius: 8px; margin-bottom: 30px;">
                                            <tr>
                                                <td style="padding: 20px;">
                                                    <h4 style="margin: 0 0 10px 0; color: #4fc3f7; font-size: 16px; font-weight: 600;">O que você vai receber por aqui:</h4>
                                                    <ul style="margin: 0; padding-left: 20px; color: #cbd5e1; font-size: 14px; line-height: 1.6;">
                                                        <li style="margin-bottom: 8px;">🚀 Lançamentos de novas ferramentas e patches do SO.</li>
                                                        <li style="margin-bottom: 8px;">🎨 Insights de Design de Interface (UI) e experiência de uso.</li>
                                                        <li style="margin-bottom: 0;">🛠️ Tutoriais, changelogs e recursos do ecossistema OneDevs.</li>
                                                    </ul>
                                                </td>
                                            </tr>
                                        </table>
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td align="center" style="padding: 10px 0 20px 0;">
                                                    <a href="https://github.com" target="_blank" style="background-color: #4fc3f7; color: #0d1b2a; font-size: 14px; font-weight: bold; text-decoration: none; padding: 12px 30px; border-radius: 6px; display: inline-block;">
                                                        Acessar o Ecossistema
                                                    </a>
                                                </td>
                                            </tr>
                                        </table>
                                        <p style="margin: 20px 0 0 0; color: #a0aec0; font-size: 14px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 20px;">
                                            Se tiver qualquer dúvida ou sugestão para o sistema operacional, basta responder a este e-mail. Estamos construindo o OneDevs OS juntos!
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td align="center" style="background-color: #0d1b2a; padding: 30px 40px; text-align: center; border-top: 1px solid rgba(255,255,255,0.05);">
                                        <p style="margin: 0 0 10px 0; color: #4fc3f7; font-size: 14px; font-weight: bold;">OneDevs OS Team</p>
                                        <p style="margin: 0; color: #718096; font-size: 12px;">&copy; 2026 OneDevs. Todos os direitos reservados.</p>
                                        <p style="margin: 10px 0 0 0; color: #718096; font-size: 11px;">Você recebeu este e-mail porque se inscreveu em nossa newsletter.</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            </html>
            `;

            // 5. Envio do e-mail (Sem o await para liberar a resposta HTTP mais rápido)
            sendMail(email, "Bem-vindo ao OneDevsOS!", htmlBoasVindas)
                .catch(err => console.error("Erro em background ao enviar e-mail:", err));

            // Retorna sucesso para o cliente imediatamente após salvar no banco
            return res.status(201).json({ message: "Email cadastrado com sucesso" });

        } catch (error) {
            console.error("Erro ao cadastrar e-mail:", error);
            return res.status(500).json({ message: "Erro interno ao cadastrar" });
        }
    }
};

export default cadastrarEmailController;