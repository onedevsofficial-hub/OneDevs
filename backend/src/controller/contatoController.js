import sendMail from "../config/SendGrid.js";

const contatoController = {
  enviarMensagem: async (req, res) => {
    try {
      const { nome, email, mensagem } = req.body;

      if (!nome || !email || !mensagem) {
        return res
          .status(400)
          .json({ message: "Todos os campos são obrigatórios." });
      }

      const htmlContato = `
        <div style="font-family: sans-serif; color: #333;">
            <h2>Nova mensagem recebida pelo site OneDevs OS!</h2>
            <hr />
            <p><strong>Nome do usuário:</strong> ${nome}</p>
            <p><strong>E-mail de resposta:</strong> ${email}</p>
            <br />
            <p><strong>Mensagem:</strong></p>
            <div style="background: #f4f4f4; padding: 15px; border-radius: 8px;">
                <p style="white-space: pre-wrap;">${mensagem}</p>
            </div>
            <hr />
            <p><small>Para responder, basta enviar um e-mail direto para ${email}</small></p>
        </div>
            `;

      await sendMail({
        to: process.env.EMAIL_USER,
        subject: `[Contato Site] Mensagem de ${nome}`,
        html: htmlContato,
        text: "Mensagem enviada pelo formulário do contato."
      });

      return res.status(200).json({ message: "Mensagem enviada."});

    } catch (error) {
        console.error("Erro ao enviar mensagem de contato", error);
        return res.status(500).json({ message: "Erro ao enviar a mensagem. Tente novamente mais tarde"});
    }
  }
};

export default contatoController;