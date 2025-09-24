const Order = require('../models/order');

// User's order history
module.exports.getUserOrders = async (req, res) => {
    let order = await Order.find({ user: userId }).populate('items.food');


  res.render('orders', { order });
};

// Kitchen queue
module.exports.getKitchenOrders = async (req, res) => {
  const kitchenOrders = await kitchenOrders.find({ status: 'placed' }).populate('items.food');
  res.render('kitchen', { kitchenOrders });
};

// Kitchen removes/finishes an order
module.exports.removeOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    await Order.findByIdAndDelete(orderId);

    req.flash('success', 'Order removed from kitchen queue.');
    res.redirect('/kitchen');
  } catch (err) {
    console.error('RemoveOrder error:', err);
    req.flash('error', 'Something went wrong.');
    res.redirect('/kitchen');
  }
};
