const products = require('../models/products.model');

const findAll = async () => {
  const result = await products.getAllProducts();
  return { type: null, message: result };
};

const findById = async (productID) => {
  const product = await products.findByid(productID);
  if (product) return { type: null, message: product };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

module.exports = {
  findById,
  findAll,
};