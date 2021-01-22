'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('admins', {
			id_admin: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			nome_admin: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			email_admin: {
				type: Sequelize.STRING,
				allowNull: false,
				unique: true
			},
			senha_admin: {
				type: Sequelize.STRING,
				allowNull: false
			},
			excluido_admin: {
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
		return queryInterface.dropTable('admins')
	}
};
