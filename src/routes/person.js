//***inyección de dependencias***
const express = require('express');

//***instanciaciones***
let router = express.Router();

//***rutas***
router.get('/person', (req, res) => {
  res.render('person');	//renderiza la vista person como respuesta
});

router.post('/person_json', express.json({type: '*/*'}), (req, res) => {
  console.log(`name: ${req.body.name}`);	//imprime en consola el cuerpo de la petición
  console.log(`name: ${req.body.apellido}`);	//imprime en consola el cuerpo de la petición
});

router.get('/test_json', (req, res) => {
  res.render('testJson');  //renderiza la vista testJson como respuesta
})

//***exportación***
module.exports = router;
