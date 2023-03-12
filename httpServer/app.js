const express = require('express'); //modulo para servidores web
const path = require('path');

const app = express(); //inicializa la app

const port = process.env.PORT || 3000;//toma el puerto por defecto o de lo contrario el 3000

app.use('/assets', express.static(path.join(__dirname, '/public')));
app.use('/', (req, res, next) => { //ejecuta un callback cada que se consulta una ruta usando un middleware
  console.log('Request Url: ' + req.url);
  next();
});

app.set('view engine', 'ejs') //configura ejs como el motor de platillas por defecto

//Función que define como se comportará la ruta raíz con el metodo GET
app.get('/', (req, res) => {
  res.render('index'); //rendriza el archivo index.ejs
})

//ruta con paso de parametros
app.get('/person/:id', (req, res) => {
  res.render('persons', { ID: req.params.id}) //renderiza persons.ejs y pasa un obj a la vista ejs
})

const DATA = [
  {id: 1,  nombre: "Hugo", apellido: "Estrada Ramirez", edad: 19},
  {id: 2,  nombre: "Estela", apellido: "Perez Suarez", edad: 18},
  {id: 3,  nombre: "Sabrina", apellido: "Contreras Morales", edad: 17},
];
//ruta con paso de parametros
app.get('/personas', (req, res) => {
  res.render('personas', {data: DATA}) //renderiza personas.ejs y pasa un array a la vista
})

//ruta con respuesta json
app.get('/api', (req, res) => {
  res.json({
    firstname: 'John',
    lastname: 'Doe'
  })
})

//pone a la escucha el servidor en local
app.listen(port, () => console.log(`server on http://localhost:${port}`)); 