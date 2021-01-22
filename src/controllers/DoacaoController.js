const Doacao = require('../models/Doacao')
const Notificacao = require('../models/Notificacao')
const Usuario =  require('../models/Usuario')
const { indexByExcluido } = require('./CategoriaController')

module.exports = {
    async index(req, res){
        const doacoes = await Doacao.findAll()
        if(doacoes == 0){
            return res.status(400).json({error: 'Nenhuma doação encontrada...'})
        }
        else{
            return res.json(doacoes)
        }
    },
    async indexByPk(req, res){
        const {id_doacao} = req.body
        const doacao = await Doacao.findByPk(id_doacao)
        if(!doacao){
            return res.status(400).json({error: 'Nenhuma doação encontrada...'})
        }
        else{
            return res.json(doacao)
        }
    },
    async indexByNotificacao(req, res){
        const {id_notificacao} = req.body
        const doacoes = await Doacao.findAll({
            where: {
                id_notificacao: id_notificacao
            }
            
        })
        if(doacoes == 0){
            return res.status(400).json({error: 'Nenhuma doação encontrada...'})
        }
        else{
            return res.json(doacoes)
        }
    },
    async indexByUsuario(req, res){
        const {usuario_doacao} = req.body
        const doacoes = await Doacao.findAll({
            order: [
                ['data_doacao', 'DESC']
            ],
            where: {
                usuario_doacao: usuario_doacao
            },
            include: [{ 
                association: 'notificacao',
                include: [{
                    association: 'ong',
                },{
                    association: 'categoria',
                }
                ]
            },
            ]
        })
        if(doacoes == 0){
            return res.status(400).json({error: 'Nenhuma doação encontrada...'})
        }
        else{
            return res.json(doacoes)
        }
    },
    async indexByDate(req, res){
        const {data_doacao} = req.body
        const doacoes = await Doacao.findAll({
            where: {
                data_doacao: data_doacao
            }
        })
        if(doacoes == 0){
            return res.status(400).json({error: 'Nenhuma doação encontrada...'})
        }
        else{
            return res.json(doacoes)
        }
    },
    async indexByPendente(req, res){
        const {pendente_doacao} = req.body
        const doacoes = await Doacao.findAll({
            where: {
                pendente_doacao: pendente_doacao
            }
        })
        if(doacoes == 0){
            return res.status(400).json({error: 'Nenhuma doação encontrada...'})
        }
        else{
            return res.json(doacoes)
        }
    },
    async indexByExcluido(req, res){
        const {excluido_doacao} = req.body
        const doacoes = await Doacao.findAll({
            where: {
                excluido_doacao: excluido_doacao
            }
        })
        if(doacoes == 0){
            return res.status(400).json({error: 'Nenhuma doação encontrada...'})
        }
        else{
            return res.json(doacoes)
        }
    },
    async store(req, res){
        const {notificacao_doacao, usuario_doacao, data_doacao, 
            quantidade_doacao, pendente_doacao} = req.body
        
        const teste_notificacao = await Notificacao.findOne({
            where: {
                id_notificacao: notificacao_doacao
            }
        })

        const teste_usuario = await Usuario.findOne({
            where: {
                id_usuario: usuario_doacao
            }
        })

        if(!teste_notificacao){
            return res.json({error: 'Não foi possível encontrar uma notificação com este ID'})
        }
        else if(!teste_usuario){
            return res.json({error: 'Não foi possível encontrar um usuário com este ID'})
        }
        else{
            await Doacao.create({notificacao_doacao, usuario_doacao, data_doacao, 
                quantidade_doacao, pendente_doacao})
            return res.json({success: "true"})
        }
    }
}