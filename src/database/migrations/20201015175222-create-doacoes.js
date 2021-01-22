'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('doacoes', {
			id_doacao: {
				type: Sequelize.INTEGER, 
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			notificacao_doacao: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'notificacoes',
					key: 'id_notificacao'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			usuario_doacao: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'usuarios',
					key: 'id_usuario'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			data_doacao: {
				type: Sequelize.DATEONLY,
				allowNull: false
			},
			quantidade_doacao: {
				type: Sequelize.INTEGER,
				allowNull: false	
			},
			pendente_doacao: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: true
			},
			excluido_doacao: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false	
			},
			created_at: {
				type: Sequelize.DATE,
				allowNull: true
			},
			updated_at: {
				type: Sequelize.DATE,
				allowNull: true
			}
		})
	},

	down: async (queryInterface, Sequelize) => {
		return queryInterface.dropTable('doacoes')
	}
};
