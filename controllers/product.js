const FoodItem = require('../models/foodItems'); 
const Order    = require('../models/orders');
const Cart = require('../models/cart');
const KitchenOrder = require('../models/kitchenOrders');
const User = require('../models/user');

module.exports.appetizers = async(req,res) => {
    const appetizers = await FoodItem.find({category:"appetizer"});
    res.render('menu/appetizers', {appetizers});
};

module.exports.sushi = async(req,res) =>{
    const sushi = await FoodItem.find({category: "sushi"});
    res.render('menu/sushi', {sushi});
};

module.exports.drink = async(req,res) =>{
    const drink = await FoodItem.find({category: "drink"});
    res.render('menu/drink', {drink});
};

module.exports.dessert = async(req,res) =>{
    const dessert = await FoodItem.find({category: "dessert"});
    res.render('menu/dessert', {dessert});
};

module.exports.renderNewForm = async(req,res) =>{ 
    res.render('menu/new');
};

module.exports.viewMenuItem = async(req,res) =>{ 
    const thisFoodItem = await FoodItem.findById(req.params.id);
    // console.log(thisFoodItem);
    res.render("menu/edit", {thisFoodItem});
};

module.exports.createNewItem = async(req,res) => {
    const newFood = new FoodItem(req.body.food);
    await newFood.save();
    // console.log(newFood);
    req.flash('success', 'Successfully made a new food item!');
    res.redirect(`/home`)
};

module.exports.editMenuItem = async(req,res) => {
    const {id} = req.params;
    const foodItem = await FoodItem.findByIdAndUpdate(id, {...req.body.FoodItem});
    req.flash('success', 'Successfully updated item');
    res.redirect('/home');
};

module.exports.deleteMenuItem = async(req,res) => {
    const { id } = req.params;
    await FoodItem.findByIdAndDelete(id);
    req.flash('success', 'Menu Item Deleted.')
    res.redirect('/home');
};


module.exports.orderItem = async (req, res) => {
  try {
    const userId = req.user._id;
    const { id } = req.params; // id comes from route /product/:id/order
    const { qty } = req.body;
    const quantity = Number(qty) || 1;

    // 1. Find product to get price
    const food = await FoodItem.findById(id);
    if (!food) {
      req.flash('error', 'Food item not found.');
      return res.redirect('/home');
    }

    // 2. Add to Cart
    let cart = await Cart.findOne({ user: userId });
    if (!cart) cart = new Cart({ user: userId, items: [] });

    const existingCartItem = cart.items.find(
      (item) => item.food.toString() === id
    );

    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      cart.items.push({ food: id, quantity });
    }

    await cart.save();

    // 3. Add (or update) KitchenOrder
    let kitchenOrder = await KitchenOrder.findOne({
      user: userId,
      status: 'placed',
    });

    if (!kitchenOrder) {
      kitchenOrder = new KitchenOrder({
        user: userId,
        items: [{ food: id, qty: quantity }],
        totalPrice: food.price * quantity,
      });
    } else {
      const existingKitchenItem = kitchenOrder.items.find(
        (item) => item.food.toString() === id
      );

      if (existingKitchenItem) {
        existingKitchenItem.qty += quantity;
      } else {
        kitchenOrder.items.push({ food: id, qty: quantity });
      }

      // calculates order total
      await kitchenOrder.populate('items.food');
      kitchenOrder.totalPrice = kitchenOrder.items.reduce((sum, item) => {
        return sum + item.qty * (item.food.price || 0);
      }, 0);
    }

    await kitchenOrder.save();

    req.flash(
      'success',
      `${food.title} (x${quantity}) added to cart and sent to kitchen!`
    );
    res.redirect('/home');
  } catch (err) {
    console.error('orderItem error:', err);
    req.flash('error', 'Could not process your order item.');
    res.redirect('/home');
  }
};
