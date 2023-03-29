//***inyección de dependencias***
const express = require('express');

//***instanciaciones***
let router = express.Router();

//***rutas***
router.get('/person', (req, res) => {
  res.render('person');	//renderiza la vista person como respuesta
});

//***exportación***
module.exports = router;
