const Admin = require('../models/Admin')

module.exports = {
    async index(req, res){
        const admins = await Admin.findAll()
        if(admins == 0){
            return res.status(400).json({error: 'Nenhum administrador encontrado...'})
        }
        else{
            return res.json(admins)
        }
    },
    async indexByPk(req, res){
        const {id_admin} = req.body
        const admin = await Admin.findByPk(id_admin)
        if(!admin){
            return res.status(400).json({error: 'Nenhum administrador encontrado...'})
        }
        else{
            return res.json(admin)
        }
    },
    async indexByName(req, res){
        const {nome_admin} = req.body
        const admin = await Admin.findOne({
            where: {
                nome_admin: nome_admin
            }
        })
        if(!admin){
            return res.status(400).json({error: 'Nenhum administrador encontrado...'})
        }
        else{
            return res.json(admin)
        }
    },
    async indexByEmail(req, res){
        const {email_admin} = req.body
        const admin = await Admin.findOne({
            where: {
                email_admin: email_admin
            }
        })
        if(!admin){
            return res.status(400).json({error: 'Nenhum administrador encontrado...'})
        }
        else{
            return res.json(admin)
        }
    },
    async indexByExcluido(req, res){
        const {excluido_admin} = req.body
        const admin = await Admin.findAll({
            where: {
                excluido_admin: excluido_admin
            }
        })
        if(admin == 0){
            return res.status(400).json({error: 'Nenhum administrador encontrado...'})
        }
        else{
            return res.json(admin)
        }
    },
    async store(req, res){
        const {nome_admin, email_admin, senha_admin} = req.body

        const teste_email = await Admin.findOne({
            where: {
                email_admin: email_admin
            }
        })

        if(!teste_email){
            const admin = await Admin.create({nome_admin, email_admin, senha_admin})
            return res.json(admin)
        }
        else{
            return res.status(400).json({error: 'Email de Administrador já cadastrado...', teste_email})
        }
    }
}