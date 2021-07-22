const { DataTypes } = require("sequelize")

module.exports = (sequelize, type) => {
    return sequelize.define('producto', {
        id_producto: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        item: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        valor: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })
}