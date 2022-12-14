const products = require('../services/products.service');
const sales = require('../services/sales.service');

const validationIdProduct = async (req, res, next) => {
  const { id } = req.params;
  const { type, message } = await products.findById(id);
  if (type) {
    return res.status(404).json({ message });
  }
  return next();
};

const validationIdSale = async (req, res, next) => {
  const { id } = req.params;
  const { type, message } = await sales.findById(id);
  if (type) {
    return res.status(404).json({ message });
  }
  return next();
};

module.exports = {
  validationIdProduct,
  validationIdSale,
};