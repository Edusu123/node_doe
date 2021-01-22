const {Model, DataTypes} = require('sequelize')

class Categoria extends Model{
    static init(connection){
        super.init({
            id_categoria: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            nome_categoria: DataTypes.STRING,
            excluido_categoria: DataTypes.BOOLEAN
        },{
            sequelize: connection,
            freezeTableName: true,
            tableName: 'categorias'
        })
    }
    static associate(models){
        this.hasMany(models.Notificacao, {foreignKey: 'id_categoria_notificacao', as: 'notificacoes'})
    }
}

module.exports = Categoria