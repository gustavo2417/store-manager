const express = require('express');
const sales = require('../controllers/sales.controller');

const router = express.Router();

router.get('/', sales.getSales);

router.get('/:id', sales.getByID);

module.exports = router;