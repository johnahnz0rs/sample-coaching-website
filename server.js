// set up the server
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// require j00r database -- no dbase needed for this project


// serve angular files from 'dist' directory
app.use(express.static(path.join(__dirname, '/dist/segev-coaching')));


// routes
app.get('/', function (req, res) {

});

app.get('/info', function (req, res) {

});

app.get('/background', function (req, res) {

});


// load and use j00r routes file
app.use('/api', require('./server/config/routes.js'));
// catch any other routes that don't match routes.js
app.use(require('./server/config/catch-all.routes.js'));


// start server
app.listen(1337, function() {
    console.log('johnahnz0rs is l33t on port 1337');
});