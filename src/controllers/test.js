const getAll = async (_req, res) => {
  res.status(200).json({ message: 'teste controller nível 2' })
};

module.exports = getAll;