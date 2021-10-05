//-------Configurações do Back-------

const mongoose = require('mongoose'); //import da biblioteca mongoose responsavel pelo BD (banco de dados) Mongoose
const express = require('express'); //import do express
const cors = require('cors'); //import do cors

const app = express(); // inicialização do express
app.use(cors()); //
app.use(express.json()); //fala para o express trabalhar co  json

const port = 3000; //definição da porta que vai rodar
app.listen(port, () => {
    console.log('App rodando na porta 3000'); 
})

//---------Configs do Banco -------

const Vaga = require('./models/vaga'); //import da colection Vaga que está no arquivo vaga.js da pasta model

const Conn = require('./conn/conn'); //import da função de conexão com o banco Conn
Conn();

//------------Teste de adição de vaga---------------

//criando a estrutura inicial para uma vaga, que é um objeto que vai conter os campos da vaga. Como ja temos uma model criada (Vaga) e ela retorna como se fosse uma classe JS, podemos assim criar um objeto baseado nele. Dessa forma a gente consegue acessar os valores, e vamos acessar atraves da constante vagaAdd.

// const vagaAdd = new Vaga({ //mongoose document
//     titulo: "DEVOPS",
//     descricao: "descricao da vaga",
//     salario: 5000,
//     senioridade: "junior"
// })

//um mongoose document pode utulizar alguns métodos, dentre elas o .save que insere um novo documento dentro do BD. Se verificar a tipagem é uma promisse podemos assim usar o .then e o .cath.
// vagaAdd.save()
// .then(() => console.log('Vaga salva com sucesso!'))
// .catch((err) => console.log(err));

//-------------CRUD---------------

//Função [GET] - listar todas as vagas do BD - Com .find - primesses puras
app.get('/vagas', (req, res) => {
    Vaga.find({}) //é uma promisse e tbm é assincrona, podemos usar then catch TBM. ele tras a informação que a gente pediu baseada na model. retorna uma lista de documentos/dados de acordo com o filtro. Nesse caso usamos um filtro genético então deixamos o obejto {} vazio.
    .then((vagas) => {
        console.log(vagas); //mostra no terminal
        res.send(vagas); //envia pro front
    })
    .catch((err) => console.log(err));
})

//Função [GET] - listar todas as vagas do BD - Com async await e tratamento de erros
app.get('/vagaslista', async (req, res) => {
    try{ //faça isso
        const vagas = await Vaga.find();
        console.log(vagas);
        res.send(vagas);
    } catch (error) { //se não conseguir retorne o pq, o erro. 
        cosole.log(error);
    }
})

//Função [GET] - listando por ID
app.get('/vagas/findById/:id', async (req, res) => {
    const vagaById = await Vaga.findOne({ _id: req.params.id }) //o findOnde retorna um unico registo de acordo com o filtro que foi passado e nesse caso o filtro é o ID. _id é padrão do mongo.
    res.send(vagaById);
}) 

//Função [GET] - listando por Título
app.get('/vagas/findById/titulo', async (req, res) => {
    const vagaByTitulo = await Vaga.find({ titulo: req.params.titulo }) //o find retorna todos registros que combinarem com ofiltro que foi passado e nesse caso o filtro é o ID. _id é padrão do mongo.
    res.send(vagaByTitulo);
}) 

//Função [DELETE] - deletando por id
app.delete('/vagas/delete/:id', async (req, res) => {
    await Vaga.deleteOne({ _id: req.params.id })
    res.status(200).send({
        message: 'Deletado com sucesso!',
    })
})

//Função [POST]
app.post('/vagas/add', async (req, res) => {
    await Vaga.create(req.body)
    .then(() => {
        res.status(201).send({
            message: 'Vaga Criada com sucesso!'
        })
    })
    .catch((err) => {
        res.status(400).send({
            error: 'Algo deu errado, verifique e tente novamente!'
        })
        console.log(err);
    })
})

//Função [PUT] - Atualiza uma vaga de acordo com o ID e Body
app.put('/vagas/update/:id', async (req, res) => {
    await Vaga.updateOne({_id: req.params.id }, req.body) //o updateOne atualiza um objeto e aceita dois parametros, o primeiro é o filtro pelo qual ele vai buscar, e o segundo é o objeto que ele vai atualizar.
    .then(() => {
        res.status(200).send({
            message: 'Atualizado com sucesso!',
        })
    })
    .catch((err) => {
        console.log(err),
        res.status(400).send({
            error: err
        })
    })
})
