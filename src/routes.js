const express = require('express')

const UsuarioController = require('./controllers/UsuarioController')
const OngController = require('./controllers/OngController')
const CategoriaController = require('./controllers/CategoriaController')
const AdminController = require('./controllers/AdminController')
const NotificacaoController = require('./controllers/NotificacaoController')
const DoacaoController = require('./controllers/DoacaoController')

const routes = express.Router()

// store das tabelas cadastro
routes.post('/usuarios', UsuarioController.store)
routes.post('/ongs', OngController.store)
routes.post('/categorias', CategoriaController.store)
routes.post('/admins', AdminController.store)
routes.post('/notificacoes', NotificacaoController.store)
routes.post('/doacoes', DoacaoController.store)

// update das linhas em tabelas
routes.post('/update_email_usuarios', UsuarioController.updateEmailUsuario)
routes.post('/update_nome_usuarios', UsuarioController.updateNomeUsuario)
routes.post('/update_senha_usuarios', UsuarioController.updateSenhaUsuario)
routes.post('/update_numero_usuarios', UsuarioController.updateNumeroUsuario)

// delete das linhas em tabelas
routes.post('/delete_usuario', UsuarioController.deleteUsuario)

//login
routes.post('/login', UsuarioController.login)

// index sem parâmetros das tabelas pesquisa geral
routes.post('/index_usuarios', UsuarioController.index)
routes.post('/index_ongs', OngController.index)
routes.post('/index_categorias', CategoriaController.index)
routes.post('/index_admins', AdminController.index)
routes.post('/index_notificacoes', NotificacaoController.index)
routes.post('/index_doacoes', DoacaoController.index)

// index com parâmetros dos usuários pesquisa especifica
routes.post('/index_email_esqueci_usuarios', UsuarioController.emailManda)

routes.post('/index_pk_usuarios', UsuarioController.indexByPk)
routes.post('/index_name_usuarios', UsuarioController.indexByName)
routes.post('/index_numero_usuarios', UsuarioController.indexByNumero)
routes.post('/index_email_usuarios', UsuarioController.indexByEmail)
routes.post('/index_email_valida_usuarios', UsuarioController.indexByEmailValida)
routes.post('/index_excluido_usuarios', UsuarioController.indexByExcluido)
routes.post('/index_verificacao_email_id_usuarios', UsuarioController.indexByIdEmail)
routes.post('/index_verificacao_email_nome_usuarios', UsuarioController.indexByNomeEmail)
routes.post('/index_verificacao_email_numero_usuarios', UsuarioController.indexByNumeroEmail)
routes.post('/index_verificacao_email_senha_usuarios', UsuarioController.indexBySenhaEmail)

// index com parâmetros das ongs
routes.post('/index_pk_ongs', OngController.indexByPk)
routes.post('/index_name_ongs', OngController.indexByName)
routes.post('/index_responsavel_ongs', OngController.indexByResponsavel)
routes.post('/index_cnpj_ongs', OngController.indexByCnpj)
routes.post('/index_cep_ongs', OngController.indexByCep)
routes.post('/index_cidade_ongs', OngController.indexByCidade)
routes.post('/index_numero_ongs', OngController.indexByNumero)
routes.post('/index_email_ongs', OngController.indexByEmail)
routes.post('/index_excluido_ongs', OngController.indexByExcluido)
routes.post('/index_ativo_ongs', OngController.indexByAtivo)
routes.post('/index_tipo_conta_ongs', OngController.indexByTipoConta)
routes.post('/index_id_cep_ongs', OngController.indexByIdCep)

// index com parâmetros de categorias
routes.post('/index_pk_categorias', CategoriaController.indexByPk)
routes.post('/index_name_categorias', CategoriaController.indexByName)
routes.post('/index_excluido_categorias', CategoriaController.indexByExcluido)

// index com parâmetros de administradores
routes.post('/index_pk_admins', AdminController.indexByPk)
routes.post('/index_name_admins', AdminController.indexByName)
routes.post('/index_email_admins', AdminController.indexByEmail)
routes.post('/index_excluido_admins', AdminController.indexByExcluido)

//index com parâmetros de notificações
routes.post('/index_include_notificacoes', NotificacaoController.indexInclude)
routes.post('/index_pk_notificacoes', NotificacaoController.indexByPk)
routes.post('/index_ong_notificacoes', NotificacaoController.indexByOng)
routes.post('/index_data_notificacoes', NotificacaoController.indexByDate)
routes.post('/index_categoria_notificacoes', NotificacaoController.indexByCategoria)
routes.post('/index_ativo_notificacoes', NotificacaoController.indexByAtingido)
routes.post('/index_excluido_notificacoes', NotificacaoController.indexByExcluido)

//index com parâmetros de doacoes
routes.post('/index_pk_doacoes', DoacaoController.indexByPk)
routes.post('/index_notificacao_doacoes', DoacaoController.indexByNotificacao)
routes.post('/index_usuario_doacoes', DoacaoController.indexByUsuario)
routes.post('/index_data_doacoes', DoacaoController.indexByDate)
routes.post('/index_pendente_doacoes', DoacaoController.indexByPendente)
routes.post('/index_excluido_doacoes', DoacaoController.indexByExcluido)

module.exports = routes;