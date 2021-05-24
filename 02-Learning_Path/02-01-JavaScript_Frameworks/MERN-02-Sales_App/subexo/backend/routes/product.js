const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/product');

//C  Save new product to database
router.post('/', productCtrl.createProduct);

//R  Display all products
router.get('/', productCtrl.displayAll);

//R  Display specific thing using its id
router.get('/:id', productCtrl.findOne);

module.exports = router;