//Carregando módulos
const express = require('express')
const handlebars = require('handlebars')
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')
const app = express()
const admin = require("./routes/admin")
const path = require('path')
//const mongoose = require('mongoose')


//Configurações
    //BodyParser
    app.use(bodyParser.urlencoded({
        extended:true
    }))
    app.use(bodyParser.json())

    //Handlebars
    app.engine('handlebars', engine())
    app.set('view engine', 'handlebars')
    app.set('views', "./views");

    //Mongoose

    // Arq
    app.use(express.static(path.join(__dirname + "/public")))

//Rotas
    app.get('/', (req, res) => {
        res.send("Rota principal")
    })
    app.use('/admin', admin)


//Outras
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor rodando")
})