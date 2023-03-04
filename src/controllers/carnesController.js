const { carneService } = require('../services');
const { StatusCodes } = require('http-status-codes');

const getAll = async (_req, res) => {
  try {
    const result = await carneService.findAll();
    return res.status(StatusCodes.ACCEPTED).json(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAll,
};