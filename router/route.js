const express = require('express');
const prodController = require('../controller/prodController');
const reviewController = require( '../controller/reviewController' );
const router = express.Router();

router.post('/addProduct', prodController.addProduct)
router.get('/allProducts', prodController.getAllProducts)
router.get('/published', prodController.getPublishedProduct)
router.get('/allReviews',reviewController.getAllReviews)
router.post('/addReview/:id', reviewController.addReview)
router.get('/getProductReviews/:id', prodController.getProductReviews)
router.get('/getAllProductReviews', prodController.getAllProductReviews)
router.get('/:id', prodController.getOneProduct)
router.put('/:id', prodController.updateProduct)
router.delete('/:id', prodController.deleteProduct)

module.exports = router