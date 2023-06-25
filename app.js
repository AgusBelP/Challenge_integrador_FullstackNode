const express = require('express');
const fs = require('fs');
const app = express();

// Llamo a la dependencia dotenv y defino el puerto de la aplicación
require('dotenv').config()
const port = process.env.port;

app.use(express.static('public'));

app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`))