import express from 'express';
import cors from 'cors';
import router from './src/route/newsletterRoute.js';
import cadastrarEmailRouter from './src/route/cadastrarEmailRoute.js';

const app = express();
app.use(cors())
app.use(express.json())

app.use(router)
app.use(cadastrarEmailRouter)

app.listen(3000, () => {
    console.log("servidor ligado")
})