const Sequelize = require('sequelize')
    
// Conexão com o banco de dados mysql
const sequelize = new Sequelize('post_app', 'root', 'nicole', {
    host: "localhost",
    dialect: "mysql",
    query:{raw:true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}