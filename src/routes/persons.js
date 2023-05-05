const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Person = require('../models/Person');

router.get('/persons', async (req, res) => {
  const persons = await Person.find({});
  res.render('personsView', { persons });
});

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

module.exports = router;