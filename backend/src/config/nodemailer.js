import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
})

async function sendMail(to, subject, html) {
    try {
        await transporter.sendMail({
            from: `<${process.env.EMAIL_USER}>`,
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