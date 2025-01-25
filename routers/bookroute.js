const express = require('express');

const { createAuthor,createBook,getbookAuthor } = require("../controllers/book-controller");

const router = express.Router();

router.post('/author',createAuthor);
router.post('/book',createBook);
router.get('/:id',getbookAuthor);

module.exports = router;