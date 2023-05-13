const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI, {//connect to mongodb
    // useNewUrlParser: true,
    // useUnifiedTopology: true
    // useFindAndModify: true,
    // useCreateIndex: true
})
.then(db => console.log('conectado a', db.connection.name))//if connection is successful
.catch(error => console.log(error));//if connection has error