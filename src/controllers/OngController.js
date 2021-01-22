const Ong = require('../models/Ong')
const sequelize = require('sequelize');
const { indexByNumero, indexByEmail, indexByExcluido } = require('./UsuarioController')

module.exports = {
    async index(req, res){
        const ongs = await Ong.findAll({
            order: [ 
                sequelize.fn(' RANDOM ') 
            ]
        });
        if(ongs == 0){
            return res.json({ error: 'Nenhuma instituição foi encontrada...'})
        }
        else{
            return res.json({ongs})
        }
    },
    async indexByPk(req, res){
        const {id_ong} = req.body
        const ong = await Ong.findByPk(id_ong)
        if(!ong){
            return res.status(400).json({ error: 'Nenhuma instituição foi encontrada...'})
        }
        else{
            return res.json(ong)
        }
    },
    async indexByName(req, res){
        const {nome_ong} = req.body
        const ong = await Ong.findOne({
            where: {
                nome_ong: nome_ong
            }
        })
        if(!ong){
            return res.status(400).json({ error: 'Nenhuma instituição foi encontrada...'})
        }
        else{
            return res.json(ong)
        }
    },
    async indexByResponsavel(req, res){
        const {responsavel_ong} = req.body
        const ong = await Ong.findAll({
            where: {
                responsavel_ong: responsavel_ong
            }
        })
        if(ong == 0){
            return res.status(400).json({ error: 'Nenhuma instituição foi encontrada...'})
        }
        else{
            return res.json(ong)
        }
    },
    async indexByCnpj(req, res){
        const {cnpj_ong} = req.body
        const ong = await Ong.findOne({
            where: {
                cnpj_ong: cnpj_ong
            }
        })
        if(!ong){
            return res.status(400).json({ error: 'Nenhuma instituição foi encontrada...'})
        }
        else{
            return res.json(ong)
        }
    },
    async indexByCep(req, res){
        const {cep_ong} = req.body
        const ong = await Ong.findOne({
            where: {
                cep_ong: cep_ong
            }
        })
        if(ong == 0){
            return res.json({ error: 'Nenhuma instituição foi encontrada...'})
        }
        else{
            return res.json(ong)
        }
    },
    async indexByIdCep(req, res){
        const {id_ong} = req.body
        const ong = await Ong.findOne({
            where: {
                id_ong: id_ong
            }
        })
        if(ong == 0){
            return res.json({ error: 'Nenhuma instituição foi encontrada...'})
        }
        else{
            return res.json(ong)
        }
    },
    async indexByCidade(req, res){
        const {cidade_ong} = req.body
        const ong = await Ong.findAll({
            where:{
                cidade_ong: cidade_ong
            }
        })
        if(ong == 0){
            return res.status(400).json({ error: 'Nenhuma instituição foi encontrada...'})
        }
        else{
            return res.json(ong)
        }
    },
    async indexByNumero(req, res){
        const {numero_ong} = req.body
        const ong = await Ong.findOne({
            where: {
                numero_ong: numero_ong
            }
        })
        if(!ong){
            return res.status(400).json({ error: 'Nenhuma instituição foi encontrada...'})
        }
        else{
            return res.json(ong)
        }
    },
    async indexByEmail(req, res){
        const {email_ong} = req.body
        const ong = await Ong.findOne({
            where: {
                email_ong: email_ong
            }
        })
        if(!ong){
            return res.status(400).json({ error: 'Nenhuma instituição foi encontrada...'})
        }
        else{
            return res.json(ong)
        }
    },
    async indexByExcluido(req, res){
        const {excluido_ong} = req.body
        const ong = await Ong.findAll({
            where: {
                excluido_ong: excluido_ong
            }
        })
        if(ong == 0){
            return res.status(400).json({ error: 'Nenhuma instituição foi encontrada...'})
        }
        else{
            return res.json(ong)
        }
    },
    async indexByAtivo(req, res){
        const {ativo_ong} = req.body
        const ong = await Ong.findAll({
            where: {
                ativo_ong: ativo_ong
            }
        })
        if(ong == 0){
            return res.status(400).json({ error: 'Nenhuma instituição foi encontrada...'})
        }
        else{
            return res.json(ong)
        }
    },
    async indexByTipoConta(req, res){
        const {tipo_conta_ong} = req.body
        const ong = await Ong.findAll({
            where: {
                tipo_conta_ong: tipo_conta_ong
            }
        })
        if(ong == 0){
            return res.status(400).json({ error: 'Nenhuma instituição foi encontrada...'})
        }
        else{
            return res.json(ong)
        }
    },
    async store(req, res){ // VERIFICAÇÃO: nome, cnpj, numero, email
        const {nome_ong, responsavel_ong, cnpj_ong, 
                endereco_ong, cep_ong, cidade_ong, 
                numero_ong, email_ong, senha_ong, 
                ativo_ong, banco_ong, num_conta_ong, 
                agencia_ong, tipo_conta_ong, descricao_ong, 
                excluido_ong, imagem_ong} = req.body
        
        const teste_nome = await Ong.findOne({
            where: {
                nome_ong: nome_ong
            }
        })

        const teste_cnpj = await Ong.findOne({
            where: {
                cnpj_ong: cnpj_ong
            }
        })

        const teste_numero = await Ong.findOne({
            where: {
                numero_ong: numero_ong
            }
        })

        const teste_email = await Ong.findOne({
            where: {
                email_ong: email_ong
            }
        })
        
        if(!teste_nome){
            if(!teste_cnpj){
                if(!teste_numero){
                    if(!teste_email){
                        const ong = await Ong.create({nome_ong, responsavel_ong, cnpj_ong, 
                            endereco_ong, cep_ong, cidade_ong, 
                            numero_ong, email_ong, senha_ong, 
                            ativo_ong, banco_ong, num_conta_ong, 
                            agencia_ong, tipo_conta_ong, descricao_ong, 
                            excluido_ong, imagem_ong})
                        return res.json(ong)
                    }
                    else{
                        return res.status(400).json({ error: 'Email de Entidade já cadastrado...', teste_email})
                    }
                }
                else{
                    return res.status(400).json({ error: 'Número de Telefone de Entidade já cadastrado...'})
                }
            } 
            else{
                return res.status(400).json({ error: 'CNPJ de Entidade já cadastrado...'})
            }
        }
        else{
            return res.status(400).json({ error: 'Nome de Entidade já cadastrado...'})
        }
    }
}