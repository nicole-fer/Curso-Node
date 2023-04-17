//Carregando módulos
const express = require('express')
const handlebars = require('handlebars')
const bodyParser = require('body-parser')
const app = express()
//const mongoose = require('mongoose')


//Configurações
    //bodyparser
    app.use((bodyParser.urlencoded({
        extended:true
    })))
    app.use(bodyParser.json())

//Rotas


//Outras
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor rodando")
})