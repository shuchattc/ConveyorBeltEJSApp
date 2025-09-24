const kitchen = require('../controllers/kitchen');
const express = require('express');
const router = express.Router({mergeParams: true});
const CatchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');

router.get('/', CatchAsync(kitchen.getKitchenOrders));

router.delete('/:id', CatchAsync(kitchen.completeKitchenOrder));

module.exports = router;