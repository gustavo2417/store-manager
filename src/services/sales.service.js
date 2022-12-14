const sales = require('../models/sales.model');

const findAll = async () => {
  const result = await sales.getAllSales();
  return { type: null, message: result };
};

const findById = async (saleID) => {
  const sale = await sales.findById(saleID);
  if (sale.length === 0) return { type: 'SALE_NOT_FOUND', message: 'Sale not found' };
  return {
    type: null, message: sale };
};

const deleteSale = async (id) => {
  await sales.deleteSale(id);

  return { type: null, message: '' };
};

const insertSale = async (sale) => {
  const id = await sales.createSale();

  await Promise.all(sale.map(async (saleProduct) => sales.saleProducts(id, saleProduct)));
  const result = { id, itemsSold: sale };

  return { type: null, message: result };
};

const saleUpdate = async (id, sale) => {
  await Promise.all(sale.map(async (saleProduct) => sales.updateSale(id, saleProduct)));
  return { type: null, message: { saleId: id, itemsUpdated: { ...sale } } };
};

module.exports = {
  findById,
  findAll,
  deleteSale,
  insertSale,
  saleUpdate,
};