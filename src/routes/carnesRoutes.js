const { Router } = require('express');
const  { carnesControllers }  = require('../controllers');

const carnesRoutes = Router();

carnesRoutes.get('/', carnesControllers.getAll);

module.exports = carnesRoutes;