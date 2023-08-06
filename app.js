const express = require('express');
const fs = require('fs');
const app = express();
const methodOverride = require('method-override');
const { initSession } = require('./src/utils/session')

// Llamo a la dependencia dotenv y defino el puerto de la aplicación
require('dotenv').config();
const port = process.env.port;

// Inicio la sesión del usuario
app.use(initSession());
app.use((req, res, next) => {
    res.locals.isLogged = req.session.isLogged;
    next();
})

// Defino la carpeta de archivos estáticos
app.use(express.static('public'));

// Defino el template engine EJS
app.set('view engine', 'ejs');
app.set('views', './src/views')

//Importo las rutas de los archivos en la carpeta Routes
const mainRoutes = require('./src/routes/mainRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const authRoutes = require('./src/routes/authRoutes');

// Convierte los datos recibidos por POST
app.use(express.urlencoded());
app.use(express.json());

// Override para habilitar los métodos PUT y DELETE
app.use(methodOverride('_method'));

//Rutas a la aplicación
app.use("/", mainRoutes);
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes); 
app.use("/auth", authRoutes); 

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`))