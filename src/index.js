const express = require('express');
const getAll = require('./controllers/test');

const app = express();

app.use(express.json());

app.get('/', getAll);

const PORT = 3005;

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));

module.exports = app;