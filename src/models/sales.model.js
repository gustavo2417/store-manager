const camelize = require('camelize');
const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT * FROM StoreManager.sales AS s
    INNER JOIN sales_products AS p
    ON s.id = p.sale_id
    ORDER BY id, product_id`,
  );

  return camelize(result);
};

const findById = async (id) => {
  const [sale] = await connection.execute(
    `SELECT date, product_id, quantity FROM sales AS s
    INNER JOIN sales_products AS p
    ON s.id = p.sale_id WHERE ID = ?
    ORDER BY id, product_id`,
    [id],
  );
  return camelize(sale);
};

const deleteSale = async (id) => {
  const [result] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?',
    [id],
  );
  return result;
};

const createSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales VALUES ()',
    [],
  );
  return insertId;
};

const saleProducts = async (saleId, product) => {
  await connection.execute(
    'INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?)',
    [saleId, product.productId, product.quantity],
  );
};

module.exports = {
  getAllSales,
  findById,
  deleteSale,
  createSale,
  saleProducts,
};