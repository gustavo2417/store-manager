const express = require('express');
const products = require('../controllers/products.controller');
const { validationName } = require('../middlewares/validationName');
const { validationId } = require('../middlewares/validationId');

const router = express.Router();

router.get('/', products.getAllProducts);

router.get('/:id', products.getByProductID);

router.post('/', validationName, products.insertNewProduct);

router.put('/:id', validationId, validationName, products.productUpdate);

router.delete('/:id', validationId, products.productDelete);

module.exports = router;