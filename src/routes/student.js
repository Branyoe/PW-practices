//***inyeccion de dependencias***
const express = require('express');

//***instanciaciones***
const router = express.Router();

//***rutas***
router.get('/student', (req, res) => res.render('student'));//renderiza la vista student como respuesta a la ruta /student

router.post('/add-student', (req, res) => {
  //renderisa la vista displayData como respuesta a la ruta /add-student
  res.render('displayData', {
    name: req.body.name,
    nss: req.body.nss,
    age: req.body.age,
    bloodType: req.body.bloodType
  });
});

//***exportacion***
module.exports = router;