///Configurando o mongoose

const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/umbancoqualquer", {
}).then(() => {
    console.log("Conectado")
}).catch((err) => {
    console.log("Houve um erro ao se conectar com o mongoDB" + err)
})


//Model - Usuários

const UsuariosSchema = mongoose.Schema({

    nome: {
        type: String,
        require: true,
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }
})

// Collection
mongoose.model('usuarios', UsuariosSchema)

// inserindo novo usuário no banco 
const novoUsuario = mongoose.model('usuarios')

new novoUsuario({
    nome: "Nicole",
    sobrenome: "Fernandes",
    email: "nicolefernanes@gmail.com",
    idade: 23,
    pais: "Brasil"
}).save().then(() => {
    console.log("Sucesso")
}).catch((err) => {
    console.log("Erro" + err)
})