/* Importar o MongoDB */
var mongo = require('mongodb');

var connMongoDB = function(){
    console.log('Entrou na função de conexão');
    var db = new mongo.Db(
        'got',
        new mongo.Server(
            'localhost', //String contendo o endereco do banco
            27017, //Porta de conexao
            {} //Objeto com opçoes de configuração do servidor
        ),
        {} //COnfigurações opcionais
    );

    return db;
}

module.exports = function(){
    return connMongoDB;
}