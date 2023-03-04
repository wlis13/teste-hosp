const express = require('express');
const getAll = require('./controllers/test');

const app = express();

app.use(express.json());

app.get('/', getAll);

module.exports = app;