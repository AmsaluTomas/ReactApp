const express = require('express');
const bodyParser = require('body-parser');
const myRoutesHandler = require('./routes/handler.js')

// Mongo related
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',myRoutesHandler);

//DB connection
mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true})
.then( ()=> {
    console.log('DB Connected !!');
})
.catch( (err)=>{
    console.log(err);
});

app.listen(4000,() => {
    console.log('Server is running!');
});