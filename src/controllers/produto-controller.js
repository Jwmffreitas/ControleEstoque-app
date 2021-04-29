const Produto = require('../models/produto');

module.exports = {
    async index(req, res) {
        const produto = await Produto.findAll()
        res.json(produto)
    },
    async create(req, res) {
        const {id, nome, descricao, preco, quantidade } = req.body;

        let data = {};

        let produto = await Produto.findOne({where: {nome}})
        if(!produto) {
            data = {id, nome, descricao, preco, quantidade}
            produto = await Produto.create(data)
            return res.status(200).json(produto)

        }else {
            return res.status(500).json(produto)
        }
    },
    async details(req, res) {
        const {id} = req.params
        const produto = await Produto.findByPk(id)
        res.json(produto)
    },
    async delete(req, res) {
        const {id} = req.params
        const produto = await Produto.findByPk(id)
        produto.destroy()

        return res.json(produto)
    },
    async update(req, res) {
        const {id, nome, descricao, preco, quantidade } = req.body
        const data = {nome, descricao, preco, quantidade}

        const produto = await Produto.findByPk(id)

        if(produto) {
            produto.nome = data.nome
            produto.preco = data.preco
            produto.descricao = data.descricao
            produto.quantidade = data.quantidade

            await produto.save()
            return res.status(200).json(produto)
        }else {
            return res.status(500).json(produto)
        }
    }
}