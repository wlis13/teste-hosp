const { carneService } = require('../services');

const getAll = async (_req, res) => {
  try {
    const result = await carneService.findAll();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAll,
};