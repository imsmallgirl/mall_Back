const express = require('express');

const router = express.Router();
const productController = require('../controllers/productController');

router.get('/product', productController.findAll);
router.get('/product/:id', productController.findById);

module.exports = router;
