const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
    // useFindAndModify: true,
    // useCreateIndex: true
})
.then(db => console.log('conectado a', db.connection.name))
.catch(error => console.log(error));