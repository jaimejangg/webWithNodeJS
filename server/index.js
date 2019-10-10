// Importar express
const express = require('express');
const path = require('path');
const routes = require('./routes');

// Configurar express
const app = express();

// Habilitar pug
app.set('view engine', 'pug');

// Añadir vistas
app.set('views', path.join(__dirname, './views'));

// Cargar carpeta estatica llamada public
app.use(express.static('public'));

// Cargar Rutas
app.use('/', routes());

app.listen(3000);