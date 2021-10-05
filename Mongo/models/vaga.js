// principais conceitos do BD
// 1 - Schemas ==> estrutura dos documentos/dados. Como se fossem as tabelas, como é um banco de dados não relacional, não tem tabela e sim documentos. que é aplicado por meio da camada de aplicativo
// 2 - Documents ==> sao como se fosse as linhas da nossa tabela,são os dados incluidos. 
// 3- Models ==>  são construtores que usam um schema para criar uma instancia de um documento que é equivalente a um registro em um banco de dados relacional, ou seja, o model é oq define oq vai ter q ter na hora de um cadastro, é o modelo a ser seguido pra uma nova inserção no banco de dados.
// 4- Colections ==> são equivalentes as tabelas no banco de dados e elas podem conter varios documentos JSON.

const mongoose = require('mongoose'); //import do mongoose para esse arquivo

const vagaModel = new mongoose.Schema({
    titulo: {type: String, require: true},
    descricao: {type: String, require: true},
    salario: {type: Number, require: true},
    senioridade: {type: String, require: true},
    dataCriacao: {type: Date, default: Date.now}
})

const Vaga = mongoose.model("vagas", vagaModel); // inicialização da colection vaga usando o schema vagaModel montado acima

module.exports = Vaga; //exporta a colection acima para poder ser usada em outros arquivos, o nome é com a primeira letra maiuscula por convenção por se tratar de estrutura de dados