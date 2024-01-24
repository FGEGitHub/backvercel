// app.js

// Importa el módulo 'express'
const express = require('express');

// Crea una instancia de la aplicación express
const app = express();
const PORT = 3000; // Puedes cambiar el puerto si lo deseas

// Define una ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

// Inicia el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});