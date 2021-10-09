// /-------INICIALIZAÇÕES-------

const express = require ('express'); 
const mongoose = require('mongoose'); 
const cors = require ('cors');

const app = express(); 
app.use(express.json());
app.use(cors());

//-----Import das rotas-------
const vagasRoutes = require('./routes/vagas.routes');

//fazendo  conexão com o banco através da Conn
const Conn = require('./conn/conn');
Conn();














//---------- Config de porta--------
const port = 3000;
app.listen(port, () => {
    console.log(`App rodando em http://localhost:${port}/`);
})