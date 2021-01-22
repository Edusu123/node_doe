'use strict';

module.exports = {
	up: async (queryInterface, Sequelize) => {
		return queryInterface.createTable('categorias', {
			id_categoria: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			nome_categoria: {
				type: Sequelize.STRING,
				allowNull: false // tem que colocar unique
			},
			excluido_categoria: {
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
		return queryInterface.dropTable('categorias')
	}
};
