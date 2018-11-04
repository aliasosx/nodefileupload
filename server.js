const express = require('express');
const bodyparser = require('body-parser');
var router = express.Router();
var assets = require('assert');
var multer = require('multer');
var app = express();
var port = process.env.PORT || 8080;
var userRouter = require('./usersrouter');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));


app.use('/user', userRouter);
app.use(express.static('public'));

app.listen(port);
console.log('The magic happens on port ' + port);
