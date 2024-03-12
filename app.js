const express = require('express');
const app = express();


const routerCategoria = require('./routes/categorias.routes');
const routerProducto = require('./routes/productos.routes');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hola Mundo");
});

app.use('/api/v1',routerCategoria);
app.use('/api/v1',routerProducto)

app.listen(3000, () => {
    console.log('Server up running in http://localhost:3000');
});