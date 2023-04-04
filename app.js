const express = require("express")
const app = express()
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')

// Config
    //Template Engine
        app.engine('handlebars', engine())
        app.set('view engine', 'handlebars')
        app.set('views', "./views")

    // BodyParser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())
        
    // Conexão com o banco de dados mysql
        const sequelize = new Sequelize('sistemadecadastro', 'root', 'nicole', {
            host: "localhost",
            dialect: "mysql"
        })

//Rotas
    app.get('/cad', function(req, res){
        res.render('formulario')
    })
    // Rota post
    app.post('/send', function( req, res) {
        res.send('Texto: ' + req.body.titulo + " Conteudo: " + req.body.conteudo)
    })
    


//localhost:8081
app.listen(8081, function(){
    console.log("Servidor rodando")
}) //deixa o servidor rodando e deve ser a última do código

