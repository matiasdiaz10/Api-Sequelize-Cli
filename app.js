const express = require('express');
const app = express();

const modeloCategoria = require('./models').Categoria;
const modeloProducto = require('./models').Producto;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hola Mundo");
});

// Categorias
app.post('/categorias', (req, res) => {
    modeloCategoria.create(req.body)
        .then((data) => {
            res.json({datos:data})
        })
        .catch((error) => {
            res.json({error:error})
        })
})

app.put('/categorias/:id', (req, res) => {
    modeloCategoria.update(req.body, {
        where: {id: req.params.id}
    })
    .then((data) => {
        res.json({datos:data})
    })
    .catch((error) => {
        res.json({error:error})
    })
})

app.get('/categorias', (req, res) => {
    modeloCategoria.findAll({
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
})


app.get('/categorias/:id', (req, res) => {
    modeloCategoria.findOne({
        where: {id: req.params.id}
    })
    .then((data) => {
        res.json({datos:data})
    })
    .catch((error) => {
        res.json({error:error})
    })
})


app.delete('/categorias/:id', (req, res) => {
    modeloCategoria.destroy({
        where: {id: req.params.id}
    })
    .then((data) => {
        res.json({datos:data})
    })
    .catch((error) => {
        res.json({error:error})
    })
})




// Productos

app.post('/productos', (req, res) => {
    modeloProducto.create(req.body)
        .then((data) => {
            res.json({datos:data})
        })
        .catch((error) => {
            res.json({error:error})
        })
})

app.put('/productos/:id', (req, res) => {
    modeloProducto.update(req.body, {
        where: {id: req.params.id}
    })
    .then((data) => {
        res.json({datos:data})
    })
    .catch((error) => {
        res.json({error:error})
    })
})

app.get('/productos', (req, res) => {
    modeloProducto.findAll({
        include: [
            {
                model: modeloCategoria,
                attributes: ['id', 'nombre'],
                as: 'categoria'
            }
        ]
    })
    .then((data) => {
        res.json({datos:data})
    })
    .catch((error) => {
        res.json({error:error})
    })
})


app.get('/productos/:id', (req, res) => {
    modeloProducto.findOne({
        where: {id: req.params.id}
    })
    .then((data) => {
        res.json({datos:data})
    })
    .catch((error) => {
        res.json({error:error})
    })
})


app.delete('/productos/:id', (req, res) => {
    modeloProducto.destroy({
        where: {id: req.params.id}
    })
    .then((data) => {
        res.json({datos:data})
    })
    .catch((error) => {
        res.json({error:error})
    })
})

app.listen(3000, () => {
    console.log('Server up running in http://localhost:3000');
});