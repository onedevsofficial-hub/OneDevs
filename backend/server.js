import express from 'express';
import cors from 'cors';
import router from './src/route/newsletterRoute.js';
import cadastrarEmailRouter from './src/route/cadastrarEmailRoute.js';

const port = process.env.PORT || 3000

const app = express();
app.use(cors())
app.use(express.json())

app.use(router)
app.use(cadastrarEmailRouter)

app.listen(port, '0.0.0.0', () => {
    console.log("servidor ligado")
})