//conn de conect
const mongoose = require('mongoose'); //import do mongoose

//configuracoes de conexao:
//// url de conexao = mongodb://servidor/porta/nomedobanco
const Conn = () => {
    mongoose.connect('mongodb://localhost:27017/vagas', { //essa função conect é uma promisse, ela é assíncrona, que podemos solicitar o retono em caso de sucesso ou não.
        useNewUrlParser: true, // useNewUrlParser = fala pro mongoose usar o novo sistema de url
        useUnifiedTopology: true, // useUnifiedTopology = Mecanismo de monitoramento do banco de dados
    }).then(() => { //retorno caso a resposta da promessa dê certo
        console.log('CONECTADO COM O MONGO ;-)')
    }).catch((err) => { //retorno caso a resposta da promesse não dê certo
        console.log(err)
    });
}

module.exports = Conn; //export da função acima para que ela possa ser usada em outro arquivo