const express = require('express');
const mongoose = require('mongoose');
const personRouter = require('./routes/persons');
require('dotenv').config();
const path = require('path');

mongoose.Promise = global.Promise;
const app = express();//create express app

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs'); //set view engine to ejs
app.set('views', path.join(__dirname, '/views'));//set views directory

app.use('/assets', express.static(path.join(__dirname, '/public'))); //set public directory
app.use(express.urlencoded({ extended: true }));//use body parser
app.use(personRouter);

module.exports = app;

