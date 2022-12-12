const express = require('express');
const products = require('../controllers/products.controller');
const { validationName } = require('../middlewares/validationName');

const router = express.Router();

router.get('/', products.getAllProducts);

router.get('/:id', products.getByProductID);

router.post('/', validationName, products.insertNewProduct);

module.exports = router;