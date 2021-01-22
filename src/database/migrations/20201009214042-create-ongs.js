    'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable('ongs', {
            id_ong: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
				allowNull: false
            },
            nome_ong: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            responsavel_ong: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cnpj_ong: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true, 
            },
            endereco_ong: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cep_ong: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            cidade_ong: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            numero_ong: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            email_ong: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            senha_ong: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            ativo_ong: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            banco_ong: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ''
            },
            num_conta_ong: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ''
            },
            agencia_ong: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ''
            },
            tipo_conta_ong: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ''
            },
            descricao_ong: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: ''
            },
            excluido_ong: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            imagem_ong: {
                type: Sequelize.STRING,
                allowNull: false,
                defaultValue: 'http://200.145.153.172/eduardopires/tcc/building.png'
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
        return queryInterface.dropTable('ongs')
    }
};
