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

const insertProduct = async (nameProduct) => {
  const newProduct = await products.insert(nameProduct);

  return { type: null, message: newProduct };
};

module.exports = {
  findById,
  findAll,
  insertProduct,
};