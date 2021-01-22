const {Model, DataTypes} = require('sequelize')

class Doacao extends Model{
    static init(connection){
        super.init({
            id_doacao: {
				type: DataTypes.INTEGER, 
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
			},
			notificacao_doacao: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'notificacoes',
					key: 'notificacao_doacao'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			usuario_doacao: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'usuarios',
					key: 'usuario_doacao'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
			data_doacao: {
				type: DataTypes.DATEONLY,
				allowNull: false
			},
			quantidade_doacao: {
				type: DataTypes.INTEGER,
				allowNull: false	
			},
			pendente_doacao: {
				type: DataTypes.BOOLEAN,
				allowNull: false,
				defaultValue: true
			},
			excluido_doacao: DataTypes.BOOLEAN
        }, {
            sequelize: connection,
            freezeTableName: true,
            tableName: 'doacoes'
        })
    }
    static associate(models){
        this.belongsTo(models.Usuario, {foreignKey: 'usuario_doacao', as: 'usuario'})
        this.belongsTo(models.Notificacao, {foreignKey: 'notificacao_doacao', as: 'notificacao'})
    }
}

module.exports = Doacao