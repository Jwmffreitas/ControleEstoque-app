const express = require('express')

const routes = express.Router()

const Produto = require('./models/produto')

routes.get('/', function(req, res) {
    res.json({message: "Hello World"})
})

routes.post('./api/produtos', Produto.create)

module.exports = routes