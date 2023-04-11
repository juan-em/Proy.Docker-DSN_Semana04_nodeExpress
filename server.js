const express = require('express');

//Create an app
const app = express();

// Route for clients
app.get('/clientes', (req, res) => {
    res.send('Esta es la ruta de clientes');
});

// Route for products
app.get('/productos', (req, res) => {
    res.send('Esta es la ruta de productos');
});

// Default route
app.get('/', (req, res) => {
    res.send('Hello world - Jem\n');
});

// Listen on port 9000
const PORT = 9000;
app.listen(PORT);
console.log(`Running on port ${PORT}`);
