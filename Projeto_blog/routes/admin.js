const express = require('express')
const router = express.Router()


router.get('/', (res, req) => {
    res.send('Página principal do painel ADM')
})

router.get('/posts', (req, res) => {
    res.send("Página de posts")
})

router.get('/categorias', (req, res) => {
    res.send('Página de categorias')
})

module.exports = router