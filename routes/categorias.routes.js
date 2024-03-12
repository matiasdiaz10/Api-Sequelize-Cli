const routerCategoria = require('express').Router();

const categoria = require("../controllers/categorias.controller");

routerCategoria.get('/categorias', categoria.getCategorias);
routerCategoria.get('/categorias/:id', categoria.getCategoria);
routerCategoria.post('/categorias', categoria.postCategoria);
routerCategoria.put('/categorias/:id', categoria.updateCategoria);
routerCategoria.delete('/categorias/:id', categoria.deleteCategoria);


module.exports = routerCategoria;