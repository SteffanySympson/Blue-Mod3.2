const mongoose = require('mongoose');

//import dos serviços
const VagasServices = require('./../services/vagas.service');

const vagasServices = new VagasServices();

class VagasController {

    getVagas = async (req, res) => {
        const vagas = await vagasService.findAll();
        res.send(vagas);
    }

    getVagasById = async (req, res) => {
        const id = req.params.id;
    
    //tratamento de erro se o id é válido ou não
    if(!mongoose.Types.ObjectId.isValid(id)) {
        res.status(403).send(`${id} not found`);
        return;
    }

    const vaga = await vagasService.findById(id);

    //tratamento de erro se existe ou não a vaga no BD
    if(!vaga) {
        res.status(404).send('Vaga Não Localizada');
        return
    }

    res.status(200).send(vaga);
    }

    createVaga = async (req, res) => {
        const vaga = req.body;
        const vagaSalva = await vagasService.createVaga(vaga);
        res.send({ message: `vagas ${vagaSalva.titulo} criada com sucesso!`});
    }
}

module.exports = VagasController;