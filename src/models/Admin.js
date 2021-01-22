const {Model, DataTypes} = require('sequelize')

class Admin extends Model{
    static init(connection){
        super.init({
            id_admin: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: false
            },
            nome_admin: DataTypes.STRING,
            email_admin: DataTypes.STRING,
            senha_admin: DataTypes.STRING,
            excluido_admin: DataTypes.BOOLEAN
        }, {
            sequelize: connection,
            freezeTableName: true,
            tableName: 'admins'
        })
    }
}

module.exports = Admin