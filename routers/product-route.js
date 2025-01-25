const express = require('express');
const { insertProduct,getAllProduct,productAnalysis } = require('../controllers/product-controller');
const router = express.Router();
//add the product

router.post('/add',insertProduct);
router.get('/fetch',getAllProduct)
router.get('/analysis',productAnalysis)

module.exports  = router;