const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkout');

router.get('/', checkoutController.getUserOrders);
router.post('/complete', checkoutController.completeCheckout);

module.exports = router;
