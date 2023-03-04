// const camelize = require('camelize');
// const snakeize = require('snakeize');

const connection = require('../utils/Connect');

const findAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM carnes',
  );
  return result;
};

// const insertCar = async (newCar) => {
//   const column = Object.keys(snakeize(newCar)).join(', ');
//   const placeholder = Object.keys(newCar).map((_key) => '?').join(', ');

//   const [{ insertId }] = await connection.execute(
//     `INSERT INTO cars (${column}) VALUE (${placeholder})`,
//     [...Object.values(newCar)],
//   );

//   try {
//     return insertId;
//   } catch (error) {
//     console.error(`Não foi possível inserir o carro na lista ${error.message}`);
//   }
// };

// const findById = async (idCar) => {
//   const [[result]] = await connection.execute(
//     `SELECT * FROM cars WHERE id = ${idCar}`,
//   );
//   try {
//     return camelize(result);
//   } catch (error) {
//     console.error(`Carro não encontrado ${error.message}`);
//   }
// };

module.exports = {
  findAll,
  // insertCar,
  // findById,
};