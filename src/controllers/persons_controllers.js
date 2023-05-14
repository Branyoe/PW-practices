const Person = require("../models/Person");

module.exports = {

  //**Read */
  getPersons: async (req, res) => {
    try {
      const persons = await Person.find({});
      res.render('personsView', { persons });
    } catch (error) {
      res.json(error.message);
    }
  },

  //**Create */
  getAddPerson: (req, res) => res.render('addPersonView'),
  postAddPerson: async (req, res) => {
    try {
      const newPerson = new Person({
        name: req.body.name,
        age: req.body.age,
        bloodType: req.body.bloodType,
        nss: req.body.nss
      });
      await newPerson.save();
      res.redirect('/persons');
    } catch (error) {
      res.json(error.message);
    }
  },

  //**Update */
  getUpdatePerson: async (req, res) => {
    try {
      const foundPerson = await Person.findById(req.params.id);
      res.render('updatePersonView', { person: foundPerson });
    } catch (error) {
      res.json(error.message);
    }
  },
  postUpdatePerson: async (req, res) => {
    try {
      await Person.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        age: req.body.age,
        bloodType: req.body.bloodType,
        nss: req.body.nss
      });
      res.redirect('/persons');
    } catch (error) {
      res.json(error.message);
    }
  },

  //**Delete */
  getDeletePerson: async (req, res) => {
    try {
      const foundPerson = await Person.findById(req.params.id); 
      res.render('deletePersonView', { person: foundPerson });
    } catch (error) {
      res.json(error.message);
    }
  },
  postDeletePerson: async (req, res) => {
    try{
      await Person.findByIdAndDelete(req.params.id);
      res.redirect('/persons');
    }catch(error){
      res.json(error.message);
    }
  }
};