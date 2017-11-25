'use strict';

const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const router = express.Router();

//TODO: require any route files

const app = express();

app.use(morgan('common'));
app.use(bodyParser.json());

//TODO: app.use(/routePathInApp, routeVariable)

app.use(express.static('public'));

//any public routes other than index.html
// app.get('/dashboard', function(req, res) {
//   return res.sendFile('dashboard.html', {root: './public'});
// });

app.use('*', function(req, res) {
  res.status(404).json({message: 'Not found'});
});

module.exports = app;