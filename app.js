const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

// Config
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Conexão com o banco de dados mysql
    const sequelize = new Sequelize('sistemadecadastro', 'root', 'nicole', {
        host: "localhost",
        dialect: "mysql"
    })
    


//localhost:8081
app.listen(8081, function(){
    console.log("Servidor rodando")
}) //deixa o servidor rodando e deve ser a última do código

