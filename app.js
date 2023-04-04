const express = require("express")
const app = express()
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./Models/Post')

// Config
    //Template Engine
        app.engine('handlebars', engine())
        app.set('view engine', 'handlebars')
        app.set('views', "./views")

    // BodyParser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())


//Rotas
    app.get('/', function(req, res){
        Post.findAll().then(function(posts){
            res.render('home',{posts: posts})
        })
    })

    app.get('/cad', function(req, res){
        res.render('formulario')
    })
    // Rota post
    app.post('/send', function( req, res) {
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(error){
            res.send("Houve um erro: " + error)
        })
    })

    //Rota delete
    app.get('/deletar/:id', function(req,res){
        Post.destroy({where: {'id': req.params.id}}).then(function(){
            res.send("Postagem deletada com sucesso")
        }).catch(function(erro){
            res.send("Houve um problema: " + erro)
        }) 
    })

//localhost:8081
app.listen(8081, function(){
    console.log("Servidor rodando")
}) //deixa o servidor rodando e deve ser a última do código

