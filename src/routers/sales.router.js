const express = require('express');
const sales = require('../controllers/sales.controller');
const { validationIdSale } = require('../middlewares/validationId');
const { validateProduct, validateQuantity } = require('../middlewares/validationSale');

const router = express.Router();

router.post('/', validateProduct, validateQuantity, sales.insertSales);

router.get('/', sales.getSales);

router.get('/:id', sales.getByID);

router.delete('/:id', validationIdSale, sales.saleDelete);

module.exports = router;