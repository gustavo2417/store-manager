const express = require('express');
const products = require('../controllers/products.controller');

const router = express.Router();

router.get('/', products.getAllProducts);

router.get('/:id', products.getByProductID);

module.exports = router;