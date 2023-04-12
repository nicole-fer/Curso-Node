///Configurando o mongoose

const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/umbancoqualquer", {
    useMongoClient: true
}).then(() => {
    console.log("Conectado")
}).catch((err) => {
    console.log("Houve um erro ao se conectar com o mongoDB" + err)
})