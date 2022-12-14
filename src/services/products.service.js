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

const updateProduct = async (name, id) => {
  const updatedProduct = await products.update(name, id);

  if (updatedProduct) return { type: null, message: updatedProduct };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const deleteProduct = async (id) => {
  const deletedProduct = await products.deleteProduct(id);

  if (deletedProduct) return { type: null, message: '' };
  return { type: 'PRODUCT_NOT_FOUND', message: 'Product not found' };
};

const getByName = async (q) => {
  if (q.length > 0) {
    const result = await products.findByName(q);
    return { type: null, message: result };
  }
  const productsAll = await products.getAllProducts();
  return { type: null, message: productsAll };
};

module.exports = {
  findById,
  findAll,
  insertProduct,
  updateProduct,
  deleteProduct,
  getByName,
};