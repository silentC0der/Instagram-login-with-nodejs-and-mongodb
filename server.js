var express = require('express');
var app = express();
var config = require('./config/config');
var mongoose = require('mongoose');

app.use(express.static(__dirname + '/public'));

app.get('/', function (request, response) {
    response.send('Server is working')
});


var authUser = require('./app/services/authService');

app.get('/auth', authUser);

app.get('/login', function (request, response) {
    response.redirect(config.instagram.auth_url);
});

app.listen(3000);
console.log('App is runung on port 3000');

//