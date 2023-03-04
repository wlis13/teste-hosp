const  { carnesModel } = require('../model');

const findAll = async () => {
  const result = await carnesModel.findAll();
  return result;
};

module.exports = {
  findAll,
};