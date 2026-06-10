import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, 
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Erro na configuração do Nodemailer:", error);
  } else {
    console.log("Nodemailer pronto para enviar mensagens!");
  }
});

async function sendMail({ to, subject, html, text }) {
  try {
    const info = await transporter.sendMail({
      from: `OneDevs OS <${process.env.EMAIL_USER}>`,
      to,     
      subject, 
      text: text || "", 
      html,    
    });

    console.log("Mensagem enviada: %s", info.messageId);
    return info;
  } catch (error) {
    console.error("Erro no Nodemailer:", error.message);
    throw error; 
  }
}

export default sendMail;