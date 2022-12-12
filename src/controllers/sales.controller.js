const sales = require('../services/sales.service');
const errorMap = require('../utils/errorMap');

const getSales = async (_req, res) => {
  const { type, message } = await sales.findAll();

  if (type) return res.status(errorMap.mapError(type)).json(message);
  res.status(200).json(message);
};

const getByID = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await sales.findById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};

module.exports = {
  getSales,
  getByID,
};