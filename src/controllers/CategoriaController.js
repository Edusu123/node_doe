const Categoria = require('../models/Categoria');

module.exports = {
    async index(req, res){
        const categorias = await Categoria.findAll();
        if(categorias == 0){
            return res.status(400).json({ error: 'Nenhuma categoria foi encontrada...' })
        }
        else{
            return res.json(categorias)
        }
    },
    async indexByPk(req, res){
        const {id_categoria} = req.body
        const categoria = await Categoria.findByPk(id_categoria)
        if(!categoria){
            return res.status(400).json({ error: 'Nenhuma categoria foi encontrada...' })
        }
        else{
            return res.json(categoria)
        }
    },
    async indexByName(req, res){
        const {nome_categoria} = req.body
        const categoria = await Categoria.findOne({
            where: {
                nome_categoria: nome_categoria
            }
        })
        if(!categoria){
            return res.status(400).json({ error: 'Nenhuma categoria foi encontrada...' })
        }
        else{
            return res.json(categoria)
        }
    },
    async indexByExcluido(req, res){
        const {excluido_categoria} = req.body
        const categorias = await Categoria.findAll({
            where: {
                excluido_categoria: excluido_categoria
            }
        })
        if(categorias == 0){
            return res.status(400).json({ error: 'Nenhuma categoria foi encontrada...' })
        }
        else{
            return res.json(categorias)
        }
    },
    async store(req, res){
        const {nome_categoria} = req.body

        const teste_nome = await Categoria.findOne({
            where: {
                nome_categoria: nome_categoria
            }
        })

        if(!teste_nome){
            const categoria = await Categoria.create({nome_categoria})
            return res.json(categoria)
        }
        else{
            return res.status(400).json({ error: 'Nome de Categoria já foi cadastrado...' })
        }
    }
}