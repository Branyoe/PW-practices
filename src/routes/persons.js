const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Person = require('../models/Person');

router.get('/gente', async (req, res) => {
  const Persons = await Person.find({});
  res.json(Persons);
});

module.exports = router;