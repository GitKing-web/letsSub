require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const routes = require('./routes/routes.router');
const path = require('path');


app.use(express.static(path.join(__dirname, '../', 'public')));
// app.use(express.static('public'));
app.use(express.json());
app.set('view engine', 'ejs');
app.use('/', routes)
module.exports = http;