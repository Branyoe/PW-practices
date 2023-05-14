const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const personsCtrl = require('../controllers/persons_controllers');

//read
router.get('/persons', personsCtrl.getPersons);

//Create
router.get('/add-person', personsCtrl.getAddPerson);
router.post('/add-person', personsCtrl.postAddPerson);

//Update
router.get('/update-person/:id', personsCtrl.getUpdatePerson);
router.post('/update-person', personsCtrl.postUpdatePerson);

//Delete
router.get('/delete-person/:id', personsCtrl.getDeletePerson);
router.post('/delete-person/:id', personsCtrl.postDeletePerson);

module.exports = router;