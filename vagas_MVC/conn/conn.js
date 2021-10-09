//-----Config de conexão---------

const mongoose = require('mongoose');

const Conn = () => {
    mongoose.connect('mongodb://localhost:27017/vagas', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('MongoDB Conect!')
    })
    .catch(err => console.log('Erro ao conectar!', err))
}

//exportação da função de conexão
module.exports = Conn;