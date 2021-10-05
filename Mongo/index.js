const mongoose = require('mongoose'); //import da biblioteca mongoose responsavel pelo BD (banco de dados) Mongoose
const express = require('express'); //import do express
const cors = require('cors'); //import do cors

const app = express(); // inicialização do express
app.use(cors()); //
app.use(express.json()); //

const Vaga = require('./models/vaga'); //import da colection Vaga que está no arquivo vaga.js da pasta model

const Conn = require('./conn/conn'); //import da função de conexão com o banco Conn
Conn();

const port = 3000; //definição da porta que vai rodar
app.listen(port, () => {
    console.log('App rodando na porta 3000'); 
})

