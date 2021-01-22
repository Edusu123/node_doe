const {Model, DataTypes} = require('sequelize')

class Notificacao extends Model{
    static init(connection){
        super.init({
            id_notificacao: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            id_ong: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'ongs',
					key: 'id_ong'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
            data_notificacao: DataTypes.DATEONLY,
            id_categoria_notificacao: {
				type: DataTypes.INTEGER,
				allowNull: false,
				references: {
					model: 'categorias',
					key: 'id_categoria_notificacao'
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE'
			},
            descricao_notificacao: DataTypes.STRING,
            meta_notificacao: DataTypes.INTEGER,
            unidade_notificacao: DataTypes.STRING,
            atingido_notificacao: DataTypes.BOOLEAN,
            excluido_notificacao: DataTypes.BOOLEAN,
            ativo_notificacao: DataTypes.BOOLEAN
        }, {
            sequelize: connection,
            freezeTableName: true,
            tableName: 'notificacoes'
        })
    }
    static associate(models){
        this.belongsTo(models.Ong, {foreignKey: 'id_ong', as: 'ong'})
        this.belongsTo(models.Categoria, {foreignKey: 'id_categoria_notificacao', as: 'categoria'})
        this.hasMany(models.Doacao, {foreignKey: 'notificacao_doacao', as: 'doacoes'})
    }
}

module.exports = Notificacao