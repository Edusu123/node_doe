'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('notificacoes', {
			id_notificacao: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			id_ong: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'ongs',
					key: 'id_ong'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			data_notificacao: {
				type: Sequelize.DATEONLY,
				allowNull: false
			},
			id_categoria_notificacao: {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'categorias',
					key: 'id_categoria'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			descricao_notificacao: {
				type: Sequelize.STRING,
				allowNull: false
			},
			meta_notificacao: {
				type: Sequelize.INTEGER,
				allowNull: false
			},
			unidade_notificacao: {
				type: Sequelize.STRING,
				allowNull: false
			},
			atingido_notificacao: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false
			},
			excluido_notificacao: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: false	
			},
			ativo_notificacao: {
				type: Sequelize.BOOLEAN,
				allowNull: false,
				defaultValue: true
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
		return queryInterface.dropTable('notificacoes')
	}
};
