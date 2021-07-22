const Sequelize = require('sequelize')

const USER_MODEL = require('../models/users')
const PEDIDOS_MODEL = require('../models/pedidos')
const PRODUCTOS_MODEL = require('../models/productos')

const dataBase = {
    dataBaseName: "eMJt36YAxD", 
    userName: "eMJt36YAxD",
    password: "HZjCFbit8Z",
    server: "remotemysql.com",
    port: "3306"
}

const sequelize = new Sequelize(dataBase.dataBaseName, dataBase.userName, dataBase.password, {
    host: dataBase.server,
    dialect: 'mysql'
});

const USER = USER_MODEL(sequelize, Sequelize);
const PEDIDOS = PEDIDOS_MODEL(sequelize, Sequelize);
const PRODUCTOS = PRODUCTOS_MODEL(sequelize, Sequelize);

sequelize.sync({ force: false}) // true para actualizar parametros
    .then(() => {
        console.log('tablas sincronizadas')
    })

module.exports = {
    USER, PEDIDOS, PRODUCTOS
}
