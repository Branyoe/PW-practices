const express = require('express');
const mongoose = require('mongoose');
const personRouter = require('./routes/persons');
require('dotenv').config();
const path = require('path');

mongoose.Promise = global.Promise;
const app = express();

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use('/assets', express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));
app.use(personRouter);

module.exports = app;

