
//***inyección de dependencias***
const express = require('express'); //modulo para servidores web
const path = require('path');//modulo para manejo de rutas/directorios en diferentes S.O.
const personsRouter = require("./routes/person");
const studentRouter = require("./routes/student");

//***instanciación***
const app = express(); //inicializa la app

//***settings***
const port = process.env.PORT || 3000;//toma el puerto por defecto o de lo contrario el 3000

app.set('view engine', 'ejs'); //configura ejs como motor de plantillas

app.use(express.urlencoded({ extended: true })); //para poder recibir datos de formularios (POST)
app.use(personsRouter); //configura el router de personas
app.use(studentRouter); //configura el router de estudiantes
app.use('/assets', express.static(path.join(__dirname, '/public'))); //configura el directorio publico

//***Inicialización***/
app.listen(port, () => console.log(`server on http://localhost:${port}`)); //pone a la escucha el servidor en local