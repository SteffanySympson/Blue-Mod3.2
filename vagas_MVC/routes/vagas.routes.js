////import do express
const express = require ('express');

//inicialização das rotas no express
const router = express.Router();
//inicialização no controler
const VagasController = require('./../controllers/vagas.controller');

const vagasController = new VagasController();

//[GET] /vagas - Retorna a lista de vagas
router.get('/', vagasController.getVagas);

//[GET] /vagas/id - Retorna uma única vaga por ID
router.get('/:id', vagasController.getVagasById);

//[POST] /vagas - Cria uma nova vaga no banco de dados
router.post('/', vagasController.createVaga);

module.exports = router;
