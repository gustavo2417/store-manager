const products = require('../services/products.service');
const errorMap = require('../utils/errorMap');

const getAllProducts = async (_req, res) => {
  const { type, message } = await products.findAll();

  if (type) return res.status(errorMap.mapError(type)).json(message);
  res.status(200).json(message);
};

const getByProductID = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await products.findById(id);

  if (type) return res.status(errorMap.mapError(type)).json({ message });
  res.status(200).json(message);
};

module.exports = {
  getAllProducts,
  getByProductID,
};