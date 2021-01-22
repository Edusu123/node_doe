const Sequelize = require('sequelize')
const dbConfig = require('../config/dbconfig')

const Usuario = require('../models/Usuario')
const Ong = require('../models/Ong')
const Categoria = require('../models/Categoria')
const Admin = require('../models/Admin')
const Notificacao = require('../models/Notificacao')
const Doacao = require('../models/Doacao')

const connection = new Sequelize(dbConfig)

Usuario.init(connection)
Ong.init(connection)
Categoria.init(connection)
Admin.init(connection)
Notificacao.init(connection)
Doacao.init(connection)

Ong.associate(connection.models);
Categoria.associate(connection.models);
Notificacao.associate(connection.models);
Doacao.associate(connection.models);
Usuario.associate(connection.models);

module.exports = connection