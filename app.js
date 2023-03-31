const express = require("express")
const app = express()
const handlebars = require('express-handlebars')

// Config
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
 
//localhost:8081
app.listen(8081, function(){
    console.log("Servidor rodando")
}) //deixa o servidor rodando e deve ser a última do código

