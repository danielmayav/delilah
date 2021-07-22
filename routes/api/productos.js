// * Enrutador

const router = require('express').Router();

const { PRODUCTOS } = require('../../src/db')

router.get('/', async (req,res) => {
    const productos = await PRODUCTOS.findAll();
    res.json(productos);
})

router.post('/', async (req,res) => {
    const producto = await PRODUCTOS.create(req.body);
    res.json(producto);
})
module.exports = router;