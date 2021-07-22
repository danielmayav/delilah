module.exports = (sequelize, type) => {
    return sequelize.define('pedido', {
        id_pedido: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_usuario: type.INTEGER,
        descripcion: type.STRING,
        valor_total: type.FLOAT
    })
}