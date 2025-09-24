<<<<<<< HEAD
const KitchenOrder = require('../models/kitchenOrders');
const FoodItem = require('../models/foodItems'); 

// Get kitchen queue
module.exports.getKitchenOrders = async (req, res) => {
  try {
    const kitchenOrders = await KitchenOrder.find({ status: 'placed' })
      .populate('items.food')
      .sort({ createdAt: 1 });

    res.render('kitchen', { kitchenOrders });
  } catch (err) {
    console.error('getKitchenOrders error:', err);
    req.flash('error', 'Could not load kitchen queue.');
    res.redirect('/home');
  }
};

// Update kitchen order status (complete/cancel)
module.exports.completeKitchenOrder = async (req, res) => {
  try {
    const orderId = req.params.id;

    await KitchenOrder.findByIdAndDelete(orderId);

    req.flash('success', `Order Deleted`);
    res.redirect('/kitchen');
  } catch (err) {
    console.error('updateKitchenOrderStatus error:', err);
    req.flash('error', 'Something went wrong.');
    res.redirect('/kitchen');
  }
};
||||||| empty tree
=======
const KitchenOrder = require('../models/kitchenOrders');
const FoodItem = require('../models/foodItems'); 

// Get kitchen queue
module.exports.getKitchenOrders = async (req, res) => {
  try {
    const kitchenOrders = await KitchenOrder.find({ status: 'placed' })
      .populate('items.food')
      .sort({ createdAt: 1 });

    res.render('kitchen', { kitchenOrders });
  } catch (err) {
    console.error('getKitchenOrders error:', err);
    req.flash('error', 'Could not load kitchen queue.');
    res.redirect('/home');
  }
};

// Update kitchen order status (complete/cancel)
module.exports.completeKitchenOrder = async (req, res) => {
  try {
    const orderId = req.params.id;

    await KitchenOrder.findByIdAndDelete(orderId);

    req.flash('success', `Order Deleted`);
    res.redirect('/kitchen');
  } catch (err) {
    console.error('updateKitchenOrderStatus error:', err);
    req.flash('error', 'Something went wrong.');
    res.redirect('/kitchen');
  }
};
>>>>>>> 970cf6f8706313214d0ca9bc24bd26c288d5e916
