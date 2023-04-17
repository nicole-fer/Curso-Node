const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.render("admin/index")
})

router.get('/posts', (req, res) => {
    res.send("Página de posts")
})

router.get('/categorias/add', (req , res) => {
    res.render('admin/addCategorias')
})

router.get('/categorias', (req, res) => {
    res.render('admin/categorias')
})

module.exports = router