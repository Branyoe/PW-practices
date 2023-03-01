const express = require('express'); //modulo para servidores web
const app = express(); //inicializa la app

const port = process.env.PORT || 3000;

//Función que define como se comportará la ruta raíz con el metodo GET
app.get('/', (req, res) => {
  res.send(`<html>
    <head>
    </head>
    <body>
      <h1>Hello world!</h1>
    </body>
  </html>`);//response
})


app.get('/uno', (req, res) => {
  res.send('Hello World, from route one');//response
})

app.get('/prueba', (req, res) => {
  res.send(`<h3>Hola desde prueba con html</h3>`);//response
})

//pone a la escucha el servidor en local
app.listen(port, () => console.log(`server on http://localhost:${port}`)); 