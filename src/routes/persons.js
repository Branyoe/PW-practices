const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Person = require('../models/Person');

//Read
router.get('/persons', async (req, res) => {
  const persons = await Person.find({});//find all persons
  res.render('personsView', { persons });//render personsView.ejs
});

//Create
router.get('/add-person', (req, res) => {
  res.render('addPersonView'); //render addPersonView.ejs
});

router.post('/add-person', (req, res) => {
  const newPerson = new Person({//create new person
    name: req.body.name,
    age: req.body.age,
    bloodType: req.body.bloodType,
    nss: req.body.nss
  });

  newPerson
  .save()
  .then(data => res.redirect('/persons'))//redirect to persons
  .catch(err => res.json(err.message));//catch error
});


//Update
router.get('/find-by-id/:id', (req, res) => {
  Person.findById(req.params.id) //find person by id
  .then(person => res.render('updatePersonView', { person })) //render updatePersonView.ejs
  .catch(err => res.json(err.message)); //catch error
});

router.post('/update-person', (req, res) => {
  Person.findByIdAndUpdate(req.body.id, { //find person by id and update
    name: req.body.name,
    age: req.body.age,
    bloodType: req.body.bloodType,
    nss: req.body.nss
  })
  .then(data => res.redirect('/persons')) //redirect to persons
  .catch(err => res.json(err.message)); //catch error
});

module.exports = router;