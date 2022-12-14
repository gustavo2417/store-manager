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

const insertNewProduct = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await products.insertProduct(name);

  if (type) return res.status(type).json(message);

  res.status(201).json(message);
};

const productUpdate = async (req, res) => {
  const { name } = req.body;
  const { id } = req.params;
  await products.updateProduct(name, id);

  res.status(200).json({ id, name });
};

const productDelete = async (req, res) => {
  const { id } = req.params;
  await products.deleteProduct(id);

  res.status(204).json();
};

const findByName = async (req, res) => {
  const { q } = req.query;
  const { message } = await products.getByName(q);

  res.status(200).json(message);
};

module.exports = {
  getAllProducts,
  getByProductID,
  insertNewProduct,
  productUpdate,
  productDelete,
  findByName,
};