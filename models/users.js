const { DataTypes } = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define('usuario', {
        id_usuario: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        admin: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: 0 // 1 = admin; 0 = usuario
        },
        password: type.STRING
    })
}