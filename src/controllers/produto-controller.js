const Produto = require('../models/produto');

module.exports = {
    async index(req, res) {
        const produto = await Produto.findAll()
        res.json(produto)
    },
    async create(req, res) {
        const {id, nome, preco, descricao } = req.body;

        let data = {};

        let produto = Produto.findByPk(nome)
        if(!produto) {
            data = {id, nome, preco, descricao}
            produto = await Produto.create(data)
            return res.status(200).json(produto)

            /*const resultadoCreate = await Produto.create({
            nome: 'mouse',
            preco: 10,
            descricao: 'Um mouse USB bonitão'
            })
            console.log(resultadoCreate);*/

        }else {
            return res.status(500).json(produto)
        }
    },
    async details(req, res) {
        const {id} = req.params
        const produto = await Produto.find({id})
        res.json(produto)
    },
    async delete(req, res) {
        const {id} = req.params
        const produto = await Produto.findByPk({id})
        produto.destroy()

        return res.json(produto)
    },
    async update(req, res) {
        const {id, nome, preco, descricao } = req.body
        const data = {nome, preco, descricao}

        const produto = await Produto.findByPk({id})

        produto.nome = data.nome
        produto.preco = data.preco
        produto.descricao = data.descricao

        await produto.save()
    }
}