//import do model from
const Vaga = require('./../models/vagas');

//classe para retornar todas as vagas
class VagaService {
    //conecta com o modelo e retorna a lista de vagas
    findAll = async () => await Vaga.find();

    //busca pelo IDohdPlFp222wVALIheZJQSEg
    findById = async (id) => {
        return await Vaga.findById(id);
    }

    //POST criação de vaga
    createVaga = async (vaga) => {
        return await Vaga.create(vaga);
    }

    // //DELETE deleção de vaga com
    // deleteVaga = async (vaga) => {

    // }
}

module.exports = VagaService;