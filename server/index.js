// Importar express
const express = require('express');
const path = require('path');
const routes = require('./routes');

const configs = require('./config');

// Configurar express
const app = express();

// Habilitar pug
app.set('view engine', 'pug');

// Añadir vistas
app.set('views', path.join(__dirname, './views'));

// Cargar carpeta estatica llamada public
app.use(express.static('public'));

// Validar si estamos en desarrollo o en producccion.
const config = configs[app.get('env')];

// Creamos la variable para el sitio web
app.locals.titulo = config.nombresito;

// Muestra el año actual
app.use((req, res, next) => {
    // Crear nueva fecha
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    return next();
})

// Cargar Rutas
app.use('/', routes());

app.listen(3000);