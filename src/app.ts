import routes from "./routes"
import cors from 'cors'
import express from 'express'

//iniciar o express

const app = express();

//defini as regras do servidor
//mio de comunicação é um json

app.use(express.json());

//definir como os dados seram interpretados

app.use(express.urlencoded({extended: true}));

//definiir o cors - middleware para aplicações node.js com express
//que permite ou restringe requisicoes entre origens diferentes  
//ou seja requisições cross-origin

app.use(cors());

//definir as rotas 

app.use(routes)

export default app;