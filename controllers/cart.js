const Cart = require('../models/cart');
const FoodItem = require('../models/foodItem');

// Add item to cart
module.exports.addToCart = async (req, res) => {
  try {
    const userId = req.user._id;
    const foodId = req.params.id;
    const qty = parseInt(req.body.qty, 10) || 1;

    let cart = await Cart.findOne({ user: userId }).populate('items.food');

    if (!cart) {
      cart = new Cart({ user: userId, items: [] });
    }

    const existingItem = cart.items.find(
      (item) => item.food._id.toString() === foodId
    );

    if (existingItem) {
      existingItem.qty += qty;
    } else {
      cart.items.push({ food: foodId, qty });
    }

    await cart.calculateTotal();
    await cart.save();

    req.flash('success', 'Item added to cart.');
    res.redirect('/checkout');
  } catch (err) {
    console.error('AddToCart error:', err);
    req.flash('error', 'Something went wrong.');
    res.redirect('/home');
  }
};
