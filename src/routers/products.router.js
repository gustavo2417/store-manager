const express = require('express');
const products = require('../controllers/products.controller');
const { validationName } = require('../middlewares/validationName');
const { validationIdProduct } = require('../middlewares/validationId');

const router = express.Router();

router.get('/', products.getAllProducts);

router.get('/search', products.findByName);

router.get('/:id', products.getByProductID);

router.post('/', validationName, products.insertNewProduct);

router.put('/:id', validationIdProduct, validationName, products.productUpdate);

router.delete('/:id', validationIdProduct, products.productDelete);

module.exports = router;