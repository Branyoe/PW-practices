const express = require('express'); //modulo para servidores web
const path = require('path');

const app = express(); //inicializa la app

const port = process.env.PORT || 3000;//toma el puerto por defecto o de lo contrario el 3000

app.use('/assets', express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs'); //configura ejs como motor de plantillas

//Función que define como se comportará la ruta raíz con el metodo GET
app.get('/', (req, res) => {
  //renderiza html plano
  res.send(` 
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="assets/style.css">
    </head>
    <body>
      <h1>Hello word</h1>
      <p>Este es un parrafo y su contenido debe ser azul</p>
    </body>
    </html>
  `);
})

//ruta con paso de parametros
app.get('/person/:id', (req, res) => {
  res.render('person', { //renderiza person.ejs
    ID: req.params.id, //dato proveniente de params
    MESSAGE: req.query.message, //datos provenientes de query
    TIMES: req.query.times //extrae la query del header
  })
})

//pone a la escucha el servidor en local
app.listen(port, () => console.log(`server on http://localhost:${port}`)); 