const getAll = async (_req, res) => {
  res.status(200).json({ message: 'teste controller' })
};

module.exports = getAll;