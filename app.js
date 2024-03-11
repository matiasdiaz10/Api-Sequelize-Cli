const express = require('express');
const app = express();

const modeloCategoria = require('./models').Categoria;
const modeloProducto = require('./models').Producto;

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hola Mundo");
});

app.post('/categorias', (req, res) => {
    modeloCategoria.create(req.body)
        .then((data) => {
            res.json({datos:data})
        })
        .catch((error) => {
            res.json({error:error})
        })
})

app.post('/productos', (req, res) => {
    modeloProducto.create(req.body)
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