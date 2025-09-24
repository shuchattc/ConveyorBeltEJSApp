<<<<<<< HEAD
const kitchen = require('../controllers/kitchen');
const express = require('express');
const router = express.Router({mergeParams: true});
const CatchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');

router.get('/', CatchAsync(kitchen.getKitchenOrders));

router.delete('/:id', CatchAsync(kitchen.completeKitchenOrder));

module.exports = router;
||||||| empty tree
=======
const kitchen = require('../controllers/kitchen');
const express = require('express');
const router = express.Router({mergeParams: true});
const CatchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');

router.get('/', CatchAsync(kitchen.getKitchenOrders));

router.delete('/:id', CatchAsync(kitchen.completeKitchenOrder));

module.exports = router;
>>>>>>> 970cf6f8706313214d0ca9bc24bd26c288d5e916
