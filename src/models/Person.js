const mongoose = require('mongoose');

//define PersonSchema
const PersonSchema = new mongoose.Schema({
  name: String,
  age: Number,
  bloodType: String,
  nss: String,
});

module.exports = mongoose.model('persons', PersonSchema);