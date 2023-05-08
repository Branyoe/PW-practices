const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Person = require('../models/Person');

//read
router.get('/persons', async (req, res) => {
  const persons = await Person.find({});
  res.render('personsView', { persons });
});

//Create
router.get('/add-person', (req, res) => {
  res.render('addPersonView');
});

router.post('/add-person', (req, res) => {
  const newPerson = new Person({
    name: req.body.name,
    age: req.body.age,
    bloodType: req.body.bloodType,
    nss: req.body.nss
  });

  newPerson
  .save()
  .then(data => res.redirect('/persons'))
  .catch(err => res.json(err.message));
});


//Update
router.get('/find-by-id/:id', (req, res) => {
  Person.findById(req.params.id)
  .then(person => res.render('updatePersonView', { person }))
  .catch(err => res.json(err.message));
});

router.post('/update-person', (req, res) => {
  Person.findByIdAndUpdate(req.body.id, {
    name: req.body.name,
    age: req.body.age,
    bloodType: req.body.bloodType,
    nss: req.body.nss
  })
  .then(data => res.redirect('/persons'))
  .catch(err => res.json(err.message));
});

module.exports = router;