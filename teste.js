/* Conectar ao sistemadecadastro */

const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', 'nicole', {
    host: "localhost",
    dialect: "mysql"
})

//Criando model com sequelize
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

/* Postagem.sync({force: true})
 */

// Criar um registro no banco
/* Postagem.create({
    titulo: "JOGOS VORAZES",
    conteudo: "Uma menina do destrito 13 se voluntaria para ir ao 74 jogos vorazes no lugar da irma"
})
 */



const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

/* Usuario.sync({force: true}) */

/* sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar:" + erro)
}) */