const express = require('express');
const mongoose = require('mongoose');
const personRouter = require('./routes/persons');
require('dotenv').config();

mongoose.Promise = global.Promise;
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(personRouter);

module.exports = app;

