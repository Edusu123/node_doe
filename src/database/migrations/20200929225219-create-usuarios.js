'use strict';

// MIGRATION RESPOSÁVEL POR CRIAR A TABELA DE USUÁRIOS 	
// (VERSÃO FINAL)

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('usuarios', {
			id_usuario: { //id => sequence gerada automaticamente (não precisa cadastrar)
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			nome_usuario: { //nome do usuário a ser cadastrado
				type: Sequelize.STRING,
				allowNull: false,
			},
			numero_usuario: { //número de telefone do usuário (incluindo DDD)
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			email_usuario: { // campo de email do usuário
				type: Sequelize.STRING,
				allowNull: false,
				unique: true,
			},
			senha_usuario: { // campo de senha do usuário
				type: Sequelize.STRING,
				allowNull: false,
			},
			excluido_usuario: { // campo booleando de exclusão lógica
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false,
			},
			created_at: { // campo automático de criação de linha
				type: Sequelize.DATE,
				allowNull: true
			},
			updated_at: { // campo automático de alteração de dados da linha
				type: Sequelize.DATE,
				allowNull: true
			}
		})
	},

	down: async (queryInterface, Sequelize) => { // função responsável por desfazer o que a migration acima fez... 
		return queryInterface.dropTable('usuarios')
	}
};
