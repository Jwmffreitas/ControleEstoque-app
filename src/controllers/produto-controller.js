const Produto = require('../models/produto')

module.exports = {
    index(req, res) {
        const produto = await Produto.findAll()
        res.json(produto)
    },
    async create(req, res) {
        const {id, nome, preco, descricao } = req.body;

        let data = {};

        let produto = Produto.findByPk(nome)
        if(!produto) {
            /*data = {id, nome, preco, descricao}
            produto = await Produto.create(data)
            return res.status(200).json(produto)*/

            const resultadoCreate = await Produto.create({
            nome: 'mouse',
            preco: 10,
            descricao: 'Um mouse USB bonitão'
            })
        console.log(resultadoCreate);

        }else {
            return res.status(500).json(produto)
        }
    },
}