const {Model, DataTypes} = require('sequelize')

class Ong extends Model{
    static init(connection){
        super.init({
            id_ong: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            nome_ong: DataTypes.STRING,
            responsavel_ong: DataTypes.STRING,
            cnpj_ong: DataTypes.STRING,
            endereco_ong: DataTypes.STRING,
            cep_ong: DataTypes.STRING,
            cidade_ong: DataTypes.STRING,
            numero_ong: DataTypes.STRING,
            email_ong: DataTypes.STRING,
            senha_ong: DataTypes.STRING,
            ativo_ong: DataTypes.BOOLEAN,
            banco_ong: DataTypes.STRING,
            num_conta_ong: DataTypes.STRING,
            agencia_ong: DataTypes.STRING,
            tipo_conta_ong: DataTypes.STRING,
            descricao_ong: DataTypes.STRING,
            excluido_ong: DataTypes.BOOLEAN,
            imagem_ong: DataTypes.STRING,
        },{
            sequelize: connection,
            freezeTableName: true,
            tableName: 'ongs',
        })
    }
    static associate(models){
        this.hasMany(models.Notificacao, {foreignKey: 'id_ong', as: 'notificacoes'})
    }
}

module.exports = Ong