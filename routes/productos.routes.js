const routerProductos = require('express').Router();

const productoControllers = require("../controllers/productos.controller");

routerProductos.get('/productos', productoControllers.getProductos);
routerProductos.get('/productos/:id', productoControllers.getProducto);
routerProductos.post('/productos', productoControllers.postProducto);
routerProductos.put('/productos/:id', productoControllers.updateProducto);
routerProductos.delete('/productos/:id', productoControllers.deleteProducto);


module.exports = routerProductos;