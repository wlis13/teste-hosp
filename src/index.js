const express = require('express');
const dotenv = require('dotenv');
const carnesRoutes = require('./routes/carnesRoutes');

dotenv.config();

const app = express();

app.use(express.json());

app.use('/', carnesRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Servidor rodando na porta: ${PORT}`));

module.exports = app;