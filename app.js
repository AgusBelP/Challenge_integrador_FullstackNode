const express = require('express');
const fs = require('fs');
const app = express();

// Llamo a la dependencia dotenv y defino el puerto de la aplicación
require('dotenv').config();
const port = process.env.port;

// Defino la carpeta de archivos estáticos
app.use(express.static('public'));

//Importo las rutas de los archivos en la carpeta Routes
const mainRoutes = require('./src/routes/mainRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const shopRoutes = require('./src/routes/shopRoutes');

// Convierte los datos recibidos por POST
app.use(express.urlencoded());
app.use(express.json());

//Rutas a la aplicación
app.use("/", mainRoutes);
app.use("/admin", adminRoutes);
app.use("/shop", shopRoutes); 

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`))