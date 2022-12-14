const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products',
  );

  return result;
};

const findByid = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE products.id = ?',
    [id],
  );
  return result;
};

const insert = async (product) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [product],
  );
  return { id: insertId, name: product };
};

const update = async (name, id) => {
  const [result] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?', [name, id],
  );
  return result;
};

const deleteProduct = async (id) => {
  const [result] = await connection.execute(
    'DELETE FROM StoreManager.products WHERE id = ?', [id],
  );
  return result;
};

const findByName = async (q) => {
  const [result] = await connection.execute(
    `SELECT * FROM StoreManager.products WHERE name LIKE '%${q}%'`,
    [],
  );
  return result;
};

module.exports = {
  getAllProducts,
  findByid,
  insert,
  update,
  deleteProduct,
  findByName,
};