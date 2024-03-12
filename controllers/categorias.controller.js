//const Categoria = require('../models/Categoria');
const Categoria = require('../models').Categoria;

const getCategoria = (req, res) => {
    Categoria.findOne({
        where: {id: req.params.id}
    })
    .then((data) => {
        res.json({datos:data})
    })
    .catch((error) => {
        res.json({error:error})
    })
}

const getCategorias = (req, res) => {
    Categoria.findAll({
        /* include: [
            {
                model: modeloCategoria,
                attributes: ['id', 'nombre'],
                as: 'categoria'
            }
        ] */
    })
    .then((data) => {
        res.json({datos:data})
    })
    .catch((error) => {
        res.json({error:error})
    })
}


const postCategoria = (req, res) => {
    Categoria.create(req.body)
        .then((data) => {
            res.json({datos:data})
        })
        .catch((error) => {
            res.json({error:error})
        })
} 
const updateCategoria = (req, res) => {
    Categoria.update(req.body, {
        where: {id: req.params.id}
    })
    .then((data) => {
        res.json({datos:data})
    })
    .catch((error) => {
        res.json({error:error})
    })
}
const deleteCategoria = (req, res) => {
    Categoria.destroy({
        where: {id: req.params.id}
    })
    .then((data) => {
        res.json({datos:data})
    })
    .catch((error) => {
        res.json({error:error})
    })
}



module.exports = {
    getCategoria,
    getCategorias,
    postCategoria,
    updateCategoria,
    deleteCategoria
}