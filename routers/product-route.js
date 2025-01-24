const express = require('express');
const { insertProduct,getAllProduct } = require('../controllers/product-controller');
const router = express.Router();
//add the product

router.post('/add',insertProduct);
router.get('/fetch',getAllProduct)

module.exports  = router;