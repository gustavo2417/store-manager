const products = require('../services/products.service');

const validationId = async (req, res, next) => {
  const { id } = req.params;
  const { type, message } = await products.findById(id);
  if (type) {
    return res.status(404).json({ message });
  }
  return next();
};

module.exports = {
  validationId,
};