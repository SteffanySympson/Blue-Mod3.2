const mongoose = require('mongoose');

const vagaModel = new mongoose.Schema({
    titulo: {type: String, require: true},
    descricao: {type: String, require: true},
    salario: {type: Number, require: true},
    senioridade: {type: String, require: true},
    dataCriacao: {type: Date, default: Date.now}
})

const Vaga = mongoose.model('Vaga', vagaModel);

module.exports = Vaga;