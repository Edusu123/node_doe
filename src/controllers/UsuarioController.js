const Usuario = require('../models/Usuario')
const { isNullOrUndefined } = require("util");
const nodemailer = require('nodemailer');

// ARQUIVO DE CONTROLE DA TABELA USUÁRIOS (AQUI TEM TODAS AS FUNÇÕES DE PESQUISA E INCLUSÃO (FUNTURAMENTE ATUALIZAÇÃO TBM...))
// PROVAVELMENTE NÃO SERÃO USADAS TODAS AS FUNÇÕES DE INDEX, MAS É BOM TER PRONTO CASO VÁ USAR

module.exports = {
    async emailManda(req, res){
        const {email_usuario, senha_usuario} = req.body
        const usuario = await Usuario.update({senha_usuario: senha_usuario}, {
            where: {
                email_usuario: email_usuario
            }
        })
        if(usuario == 1){
            const user = "noreply.smartdev@gmail.com"
            const pass = "smartdevtcc"
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                host: 'smtp.gmail.com',
                port: 587,
                secure: true,
                auth: { user, pass }
            });
            
            var message = {
                from: user,
                to: email_usuario,
                subject: 'Nova Senha Doe',
                text: 'Sua nova senha é '+ senha_usuario,
            };
            
            transporter.sendMail(message, (error, info) => {
                if (error) {
                    return res.json(console.log(error));
                }
                else {
                    return res.json({success: "true"})
                }
                //console.log('Message sent: %s', info.messageId);
            });
        }
        else{
            return res.status(400).json({ error: 'O usuário não pode ser deletado...',
            success: 'false'
        })
        }
        
    },
    async index(req, res){ // função para listar todos os usuários
        const usuarios = await Usuario.findAll();
        if(usuarios == 0){
            return res.status(400).json({ error: 'Nenhum usuário foi encontrado...' })
        }
        else{
            return res.json(usuarios)
        }
    },
    async indexByPk(req, res){ // função de listagem por Chave primária (exibe o usuário com determinado ID)
        const {id_usuario} = req.body
        const usuario = await Usuario.findByPk(id_usuario)
        if(!usuario){
            return res.json({ error: 'Nenhum usuário foi encontrado...'})
        }
        else{
            return res.json(usuario)
        }
    },
    async indexByName(req, res){ // Função de listagem por nome (exibe apenas 1 usuário)
        const {nome_usuario} = req.body
        const usuario = await Usuario.findOne({
            where: {
                nome_usuario: nome_usuario,
            }
        })
        if(!usuario){
            return res.status(400).json({ error: 'Nenhum usuário foi encontrado...' })
        }
        else{
            return res.json(usuario)
        }
        
    },
    async indexByNumero(req, res){ // Função de listagem por número de telefone (apenas 1 usuário)
        const {numero_usuario} = req.body
        const usuario = await Usuario.findOne({
            where: {
                numero_usuario: numero_usuario,
            }
        })
        if(!usuario){
            return res.status(400).json({ error: 'Nenhum usuário foi encontrado...' })
        }
        else{
            return res.json(usuario)
        }
    },
    async indexByIdEmail(req, res){ // Função de verificação email por nome
        const {email_usuario, id_usuario} = req.body
        const usuario = await Usuario.findOne({
            where: {
                email_usuario: email_usuario,
                id_usuario: id_usuario
            }
        })
        if(isNullOrUndefined(usuario)){
            return res.json({ error: 'Nenhum usuário foi encontrado esse numero',
            success: 'false' })
        }
        else{
            return res.json({ success: 'true'})
        }
    },
    async indexByNomeEmail(req, res){ // Função de verificação email por nome
        const {email_usuario, nome_usuario} = req.body
        const usuario = await Usuario.findOne({
            where: {
                email_usuario: email_usuario,
                nome_usuario: nome_usuario
            }
        })
        if(isNullOrUndefined(usuario)){
            return res.json({ error: 'Nenhum usuário foi encontrado esse numero',
            success: 'false' })
        }
        else{
            return res.json({ success: 'true'})
        }
    },
    async indexByNumeroEmail(req, res){ // Função de verificação email por numero
        const {email_usuario, numero_usuario} = req.body
        const usuario = await Usuario.findOne({
            where: {
                email_usuario: email_usuario,
                numero_usuario: numero_usuario
            }
        })
        if(isNullOrUndefined(usuario)){
            return res.json({ error: 'Nenhum usuário foi encontrado com esse numero',
            success: 'false' })
        }
        else{
            return res.json({ success: 'true'})
        }
    },
    async indexBySenhaEmail(req, res){ // Função de verificação senha por numero
        const {email_usuario, senha_usuario} = req.body
        const usuario = await Usuario.findOne({
            where: {
                email_usuario: email_usuario,
                senha_usuario: senha_usuario
            }
        })
        if(isNullOrUndefined(usuario)){
            return res.json({ error: 'Nenhum usuário foi encontrado com essa senha',
            success: 'false' })
        }
        else{
            return res.json({ success: 'true'})
        }
    },
    async indexByEmail(req, res){ // Função de listagem por email (apenas 1 usuário)
        const {email_usuario} = req.body
        const usuario = await Usuario.findOne({
            where: {
                email_usuario: email_usuario,
            }
        })
        if(!usuario){
            return res.json({ error: 'Nenhum usuário foi encontrado...' })
        }
        else{
            return res.json(usuario)
        }
    },
    async indexByEmailValida(req, res){ // Função de listagem por email (apenas 1 usuário)
        const {email_usuario} = req.body
        const usuario = await Usuario.findOne({
            where: {
                email_usuario: email_usuario,
            }
        })
        if(!usuario){
            return res.json({ error: 'Nenhum usuário foi encontrado...' })
        }
        else{
            return res.json({success: "true"})
        }
    },
    async indexByExcluido(req, res){ // Função de listagem por exclusão (todos os usuários ativos ou excluídos...)
        const {excluido_usuario} = req.body
        const usuario = await Usuario.findAll({
            where: {
                excluido_usuario: excluido_usuario
            }
        })
        if(usuario == 0){
            return res.status(400).json({ error: 'Nenhum usuário foi encontrado...' })
        }
        else{
            return res.json(usuario)
        }
    },
    async deleteUsuario(req, res){
        const {email_usuario} = req.body
        const usuario = await Usuario.destroy({
            where: {
                email_usuario: email_usuario
            }
        })
        if(usuario == 1){
            return res.json({success: 'Usuário deletado com sucesso!'})
        }
        else{
            return res.status(400).json({error: 'O usuário não pode ser excluído...'})
        }
    },
    async updateEmailUsuario(req, res){
        const {email_usuario, id_usuario} = req.body
        const usuario = await Usuario.update({email_usuario: email_usuario}, {
            where: {
                id_usuario: id_usuario
            }
        })
        if(usuario == 1){
            return res.json({ success: "true" })
        }
        else{
            return res.json({ 
        success: 'false'
        })
        }
    },
    async updateNomeUsuario(req, res){
        const {email_usuario, nome_usuario} = req.body
        const usuario = await Usuario.update({nome_usuario: nome_usuario}, {
            where: {
                email_usuario: email_usuario
            }
        })
        if(usuario == 1){
            return res.json({ success: "true" })
        }
        else{
            return res.json({ 
        success: 'false'
        })
        }
    },
    async updateSenhaUsuario(req, res){
        const {email_usuario, senha_usuario} = req.body
        const usuario = await Usuario.update({senha_usuario: senha_usuario}, {
            where: {
                email_usuario: email_usuario
            }
        })
        if(usuario == 1){
            return res.json({ success: 'true'})
        }
        else{
            return res.json({ error: 'O usuário não pode ser deletado...',
        success: 'false'
        })
        }
    },
    async updateNumeroUsuario(req, res){
        const {email_usuario, numero_usuario} = req.body
        const usuario = await Usuario.update({numero_usuario: numero_usuario}, {
            where: {
                email_usuario: email_usuario
            }
        })
        if(usuario == 1){
            return res.json({ success: 'true'})
        }
        else{
            return res.status(400).json({ 
                success: 'false'
            })
        }
    },
    async store(req, res){ // função de armazenar usuários (todas as verificações de chaves únicas prontas)
        const {nome_usuario, numero_usuario, email_usuario, senha_usuario} = req.body
        
        const teste_numero = await Usuario.findOne({
            where: {
                numero_usuario: numero_usuario
            }
        })
        const teste_email = await Usuario.findOne({
            where: {
                email_usuario: email_usuario
            }
        })
        if(!teste_numero){
            if(!teste_email){
                const usuario = await Usuario.create({nome_usuario, numero_usuario, email_usuario, senha_usuario})
                return res.json({success: "true"})
            }
            else{
                return res.status(400).json({ error: 'Email já cadastrado...' })
            }
        }
        else{
            return res.status(400).json({ error: 'Número de telefone já cadastrado...' })
        }
    },
    //faz login
    async login(req, res) {
        //pega os dados que foram enviados
        const dadosUsuario = { 
            //obs: tem q ter o mesmo nome que o do banco
            email_usuario: req.body.email_usuario,
            senha_usuario: req.body.senha_usuario
        };
        //const { email, senha } = req.body;

        //verifica se tem um email igual
        // console.log(dadosUsuario)
        const testeEmail = await Usuario.findOne({
            where: {
                email_usuario: dadosUsuario.email_usuario,
                
            }
        }).catch( function(err) {
            console.log(err)
        });
        // console.log(testeEmail)
        //vai dar null se nao achar email igual
        if(isNullOrUndefined(testeEmail)){ 
            return res.json({
                success: "false",
                message: "Usuario não cadastrado",
            });
        }
        //se nao der null, existe o email e senha
        else{
            const testeSenha = await Usuario.findOne({
                where: {
                    email_usuario: dadosUsuario.email_usuario,
                    senha_usuario: dadosUsuario.senha_usuario
                    
                }
            }).catch( function(err) {
                return res.json({
                    success: "false",
                    message: "Erro ao verificar",
                });
            });
            if(isNullOrUndefined(testeSenha)){ 
                return res.json({
                    success: "false",
                    message: "Senha Incorreta",
                });
            }
            else{
                return res.json({
                    success: "true",
                    message: "Usuário Encontrado!",
                })
            }
        };
    }
}