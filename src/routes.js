const express = require('express')

const routes = express.Router()

const Produto = require('./controllers/produto-controller')

routes.get('/', Produto.index)

// Rotas de produtos
routes.post('/api/produtos', Produto.create)
routes.get('/api/produtos', Produto.index)
routes.get('/api/produtos.details/:id', Produto.details)
routes.delete('/api/produtos/:id', Produto.delete)
routes.put('/api/produtos', Produto.update)

module.exports = routes