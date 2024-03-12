const Producto = require("../models").Producto;
const Categoria = require("../models").Categoria;

const getProductos = (req, res) => {
  Producto.findAll({
    include: [
      {
        model: Categoria,
        attributes: ["id", "nombre"],
        /* as: "categoria", */
      },
    ],
  })
    .then((data) => {
      res.json({ datos: data });
    })
    .catch((error) => {
      res.json({ error: error });
    });
};

const getProducto = (req, res) => {
  Producto
    .findOne({
      where: { id: req.params.id },
    })
    .then((data) => {
      res.json({ datos: data });
    })
    .catch((error) => {
      res.json({ error: error });
    });
};

const postProducto = (req, res) => {
  Producto
    .create(req.body)
    .then((data) => {
      res.json({ datos: data });
    })
    .catch((error) => {
      res.json({ error: error });
    });
};

const updateProducto = (req, res) => {
  Producto
    .update(req.body, {
      where: { id: req.params.id },
    })
    .then((data) => {
      res.json({ datos: data });
    })
    .catch((error) => {
      res.json({ error: error });
    });
};

const deleteProducto = (req, res) => {
  Producto
    .destroy({
      where: { id: req.params.id },
    })
    .then((data) => {
      res.json({ datos: data });
    })
    .catch((error) => {
      res.json({ error: error });
    });
};

module.exports = {
  getProducto,
  getProductos,
  postProducto,
  updateProducto,
  deleteProducto,
};
