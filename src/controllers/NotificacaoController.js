const Notificacao = require('../models/Notificacao')
const Ong = require('../models/Ong')
const Categoria = require('../models/Categoria')

module.exports = {
    async index(req, res){
        const notificacoes = await Notificacao.findAll()
        if(notificacoes == 0){
            return res.status(400).json({error: 'Nenhuma notificação encontrada...'})
        }
        else{
            return res.json(notificacoes)
        }
    },
    async indexInclude(req, res){
        const notificacoes = await Notificacao.findAll({
            order: [
                ['data_notificacao', 'DESC']
            ],
            include: [{ 
                association: 'categoria'
            },
            { 
                association: 'ong'
            }
            ]
        })
        if(notificacoes == 0){
            return res.status(400).json({error: 'Nenhuma notificação encontrada...'})
        }
        else{
            return res.json(notificacoes)
        }
    },
    async indexByPk(req, res){
        const {id_notificacao} = req.body
        const notificacao = await Notificacao.findOne({
            where: {
                id_notificacao: id_notificacao
            }
        })
        if(!notificacao){
            return res.status(400).json({error: 'Nenhuma notificação encontrada...'})
        }
        else{
            return res.json(notificacao)
        }
    },
    async indexByOng(req, res){
        const {id_ong} = req.body
        const notificacoes = await Notificacao.findAll({
            where: {
                id_ong: id_ong
            },
            include: [{ 
                association: 'categoria'
            },
            { 
                association: 'ong'
            }
            ]
           
            
        })
        if(notificacoes == 0){
            return res.status(400).json({error: 'Nenhuma notificação encontrada...'})
        }
        else{
            return res.json(notificacoes)
        }
    },
    async indexByDate(req, res){
        const {data_notificacao} = req.body
        const notificacoes = await Notificacao.findAll({
            where: {
                data_notificacao: data_notificacao
            }
        })
        if(notificacoes == 0){
            return res.status(400).json({error: 'Nenhuma notificação encontrada...'})
        }
        else{
            return res.json(notificacoes)
        }
    },
    async indexByCategoria(req, res){
        const {id_categoria} = req.body
        const notificacoes = await Notificacao.findAll({
            where: {
                id_categoria: id_categoria
            }
        })
        if(notificacoes == 0){
            return res.status(400).json({error: 'Nenhuma notificação encontrada...'})
        }
        else{
            return res.json(notificacoes)
        }
    },
    async indexByAtingido(req, res){
        const {atingido_notificacao} = req.body
        const notificacoes = await Notificacao.findAll({
            where: {
                atingido_notificacao: atingido_notificacao
            }
        })
        if(notificacoes == 0){
            return res.status(400).json({error: 'Nenhuma notificação encontrada...'})
        }
        else{
            return res.json(notificacoes)
        }
    },
    async indexByExcluido(req, res){
        const {excluido_notificacao} = req.body
        const notificacoes = await Notificacao.findAll({
            where: {
                excluido_notificacao: excluido_notificacao
            }
        })
        if(notificacoes == 0){
            return res.status(400).json({error: 'Nenhuma notificação encontrada...'})
        }
        else{
            return res.json(notificacoes)
        }
    },
    async store(req, res){
        const {id_ong, data_notificacao, id_categoria_notificacao, descricao_notificacao, unidade_notificacao, meta_notificacao, atingido_notificacao} = req.body

        const teste_ong = await Ong.findByPk(id_ong)

        const id_categoria = id_categoria_notificacao

        const teste_categoria = await Categoria.findByPk(id_categoria)

        if(!teste_ong){
            return res.json({error: 'O ID de instituição inserido não existe...'})
        }
        else if(!teste_categoria){
            return res.json({error: 'O ID de categoria inserido não existe...'})
        }
        else{
            const notificacao = await Notificacao.create({id_ong, data_notificacao, id_categoria_notificacao, descricao_notificacao, unidade_notificacao, meta_notificacao, atingido_notificacao})
            return res.json(notificacao)
        }
    }
}