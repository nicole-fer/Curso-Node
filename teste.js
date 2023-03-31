/* Conectar ao sistemadecadastro */

const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', 'nicole', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso")
}).catch(function(erro){
    console.log("Falha ao se conectar:" + erro)
})