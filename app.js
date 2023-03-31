const express = require("express")
const app = express()


//definindo rotas

app.get("/", function(req,res){
    res.sendFile(__dirname + "/HTML/index.html")
})

app.get("/sobre", function(req,res){
    res.sendFile(__dirname + "/HTML/sobre.html")
})

//passando paramentros na rota 
app.get("/ola:nome", function(req,res){
    res.send("<h1>Olá " + req.params.nome + "</h1>")
})

 
//localhost:8081
app.listen(8081, function(){
    console.log("Servidor rodando")
}) //deixa o servidor rodando e deve ser a última do código

