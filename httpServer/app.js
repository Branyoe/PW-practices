const express = require('express'); //modulo para servidores web
const app = express(); //inicializa la app

const port = process.env.PORT || 3000;

//Función que define como se comportará la ruta raíz con el metodo GET
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
      </head>
      <body>
        <h1>Hello world!</h1>
      </body>
    </html>
  `);
})


app.get('/person/:id', (req, res) => {
  res.send(`
    <html>
      <head>
      </head>
      <body>
        <h1>Person: ${req.params.id}</h1>
      </body>
    </html>
  `);
})

app.get('/api', (req, res) => {
  res.json({
    firstname: 'John',
    lastname: 'Doe'
  })
})

//pone a la escucha el servidor en local
app.listen(port, () => console.log(`server on http://localhost:${port}`)); 