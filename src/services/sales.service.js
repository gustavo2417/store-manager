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

module.exports = {
  findById,
  findAll,
};