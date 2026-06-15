import sgMail from '@sendgrid/mail';
import dotenv from "dotenv";

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function sendMail({ to, subject, html, text }) {
  try {
    const msg = {
      to, 
      from: {
        name: 'OneDevs OS',
        email: process.env.EMAIL_USER 
      },
      subject,
      text: text || "",
      html,
    };


    const response = await sgMail.send(msg);
    
    console.log("Mensagem enviada com sucessso! Status:", response[0].statusCode);
    return response;

  } catch (error) {
    console.error("Erro no SendGrid:");
    
    if (error.response) {
      console.error(JSON.stringify(error.response.body, null, 2));
    } else {
      console.error(error.message);
    }
    
    throw error; 
  }
}

export default sendMail;