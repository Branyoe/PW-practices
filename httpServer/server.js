const express = require('express'); //modulo para servidores web
const path = require('path');

const app = express(); //inicializa la app

const port = process.env.PORT || 3000;//toma el puerto por defecto o de lo contrario el 3000

app.use('/assets', express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true })); //para poder recibir datos de formularios (POST)

app.set('view engine', 'ejs'); //configura ejs como motor de plantillas

//Función que define como se comportará la ruta raíz con el metodo GET
app.get('/student', (req, res) => {
  //renderiza html plano
  res.render('student'); //renderiza student.ejs
})

// //Función que define como se comportará la ruta addStudent con el metodo POST
// app.post('/addStudent', (req, res) => {
//   res.send(`
//     NSS: ${req.body.nss}
//     Name: ${req.body.name}
//     Age: ${req.body.age}
//     Blood Type: ${req.body.bloodType}
//   `);
// });

//Función que define como se comportará la ruta addStudent con el metodo POST
app.post('/addStudent', (req, res) => {
  //renderiza una vista ejs con los datos del formulario
  res.render('displayData', {
    name: req.body.name,
    nss: req.body.nss,
    age: req.body.age,
    bloodType: req.body.bloodType
  });
});
//pone a la escucha el servidor en local
app.listen(port, () => console.log(`server on http://localhost:${port}`)); 