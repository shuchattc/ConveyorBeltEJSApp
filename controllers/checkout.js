const Cart = require('../models/cart');
const Order = require('../models/orders');

module.exports.getUserOrders = async (req, res) => {
  try {
    const userId = req.user._id;

    // Get the current cart
    const cart = await Cart.findOne({ user: userId }).populate('items.food');

    // Optional: past orders
    const orders = await Order.find({ user: userId })
      .populate('items.food')
      .sort({ createdAt: -1 });

    res.render('checkout', { cart, orders });
  } catch (err) {
    console.error('getUserOrders error:', err);
    req.flash('error', 'Could not load your order history.');
    res.redirect('/home');
  }
};

module.exports.completeCheckout = async (req, res) => {
  try {
    const userId = req.user._id;

await Cart.findOneAndDelete({ user: userId });
    req.flash('success', 'Order placed successfully!');
    req.logout(function(err){
        if(err){
            return next(err);
        }
        req.flash('success', 'You logged out');
        res.redirect('/');
    });
  } catch (err) {
    console.error('Checkout error (completeCheckout):', err);
    req.flash('error', 'Could not complete checkout.');
    res.redirect('/home');
  }
};
