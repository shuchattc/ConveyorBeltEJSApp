const express = require('express');
const router = express.Router({mergeParams: true});
const CatchAsync = require('../utils/catchAsync');
const product = require('../controllers/product');
const {isLoggedIn} = require('../middleware');

router.get('/product/appetizers', CatchAsync(product.appetizers));

router.get('/product/sushi', CatchAsync(product.sushi));

router.get('/product/drinks', CatchAsync(product.drink));

router.get('/product/dessert', CatchAsync(product.dessert));

router.get('/product/new', isLoggedIn, CatchAsync(product.renderNewForm));

router.get('/product/edit/:id', CatchAsync(product.viewMenuItem));

router.post('/product', isLoggedIn, CatchAsync(product.createNewItem));

router.route('/product/:id')
.put(isLoggedIn, CatchAsync(product.editMenuItem))
.delete(isLoggedIn, CatchAsync(product.deleteMenuItem));

router.post('/product/:id/kitchen', CatchAsync(product.orderItem));

module.exports = router;