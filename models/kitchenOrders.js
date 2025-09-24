<<<<<<< HEAD
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KitchenOrdersSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [{
    food: { type: Schema.Types.ObjectId, ref: 'FoodItem' },
    qty: { type: Number, default: 1 }
  }],
  totalPrice: { type: Number, default: 0 },
  status: { type: String, enum: ['placed', 'completed', 'cancelled'], default: 'placed' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('KitchenOrder', KitchenOrdersSchema);
||||||| empty tree
=======
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KitchenOrdersSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  items: [{
    food: { type: Schema.Types.ObjectId, ref: 'FoodItem' },
    qty: { type: Number, default: 1 }
  }],
  totalPrice: { type: Number, default: 0 },
  status: { type: String, enum: ['placed', 'completed', 'cancelled'], default: 'placed' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('KitchenOrder', KitchenOrdersSchema);
>>>>>>> 970cf6f8706313214d0ca9bc24bd26c288d5e916
