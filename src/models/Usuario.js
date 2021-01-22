const {Model, DataTypes} = require('sequelize')

class Usuario extends Model{
    static init(connection){
        super.init({
            id_usuario: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nome_usuario: DataTypes.STRING,
            numero_usuario: DataTypes.STRING,
            email_usuario: DataTypes.STRING,
            senha_usuario: DataTypes.STRING,
            excluido_usuario: DataTypes.BOOLEAN,
        },{
            sequelize: connection,
            freezeTableName: true,
            tableName: 'usuarios'
        })
    }
    static associate(models){
        this.hasMany(models.Doacao, {foreignKey: 'usuario_doacao', as: 'doacoes'})
    }
}

module.exports = Usuario