const express = require('express');
const bodyParser = require('body-parser');
const myRoutesHandler = require('./routes/handler.js')
const app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/',myRoutesHandler);
app.listen(4000,() => {
    console.log('Server is running!');
});