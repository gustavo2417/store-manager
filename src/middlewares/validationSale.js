const products = require('../models/products.model');

const validateProduct = async (req, res, next) => {
  const sales = req.body;
  const allProducts = await products.getAllProducts();
  const Ids = allProducts.map((product) => product.id);
  const existProduct = sales.every((sale) => Ids.includes(sale.productId));

  if (sales.some((sale) => sale.productId === undefined)) {
    return res.status(400).json({ message: '"productId" is required' });
  } if (!existProduct) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

const validateQuantity = (req, res, next) => {
  const sales = req.body;

  if (sales.some((sale) => sale.quantity === undefined)) {
    return res.status(400).json({ message: '"quantity" is required' });
  } if (sales.some((sale) => sale.quantity <= 0)) {
    return res.status(422).json({ message: '"quantity" must be greater than or equal to 1' });
  }
  next();
};

module.exports = {
  validateProduct,
  validateQuantity,
};