import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const transporter = nodemailer.createTransport({
    //service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    connectionTimeout: 10000,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    },
    
    tls: {
        rejectUnauthorized: false
    }
})

async function sendMail(to, subject, html) {
    try {
        await transporter.sendMail({
            from: `"OneDevs OS" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            html
        })
    } catch (error) {
        console.error("erro ao enviar email", error)
        throw error
    }
}

export default sendMail