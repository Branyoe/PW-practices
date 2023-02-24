const express = require('express'); //modulo para servidores web
const app = express(); //inicializa la app

const port = 3000;

//Función que define como se comportará la ruta raíz con el metodo GET
app.get('/', (req, res) => {
  res.send('Hello World');//response
})

//pone a la escucha el servidor en local
app.listen(port, () => console.log(`server on http://localhost:${port}`)); 
