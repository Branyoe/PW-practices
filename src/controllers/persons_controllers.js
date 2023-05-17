const Person = require("../models/Person");

module.exports = {

  //**Read */
  getPersons: async (req, res) => { //show all persons
    try {
      const persons = await Person.find({});
      res.render('personsView', { persons });
    } catch (error) {
      res.json(error.message);
    }
  },

  //**Create */
  getAddPerson: (req, res) => res.render('addPersonView'), //show add form
  postAddPerson: async (req, res) => { //add person
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
  getUpdatePerson: async (req, res) => { //show update form
    try {
      const foundPerson = await Person.findById(req.params.id);
      res.render('updatePersonView', { person: foundPerson });
    } catch (error) {
      res.json(error.message);
    }
  },
  postUpdatePerson: async (req, res) => { //update person
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
  getDeletePerson: async (req, res) => { //show delete alert
    try {
      const foundPerson = await Person.findById(req.params.id); 
      res.render('deletePersonView', { person: foundPerson });
    } catch (error) {
      res.json(error.message);
    }
  },
  postDeletePerson: async (req, res) => { //delete person
    try{
      await Person.findByIdAndDelete(req.params.id);
      res.redirect('/persons');
    }catch(error){
      res.json(error.message);
    }
  },
  
  //**Search */
  postSearchPerson: async (req, res) => { //search person
    try {
      const persons = await Person.find({ name: { $regex: req.body.criteria , $options: "i" }});
      res.render('personsView', { persons });
    }catch(error){
      res.json(error.message);
    }
  }
};