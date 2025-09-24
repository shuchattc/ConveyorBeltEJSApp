<<<<<<< HEAD
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodItemSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    category: String,
});

module.exports = mongoose.model('FoodItem', FoodItemSchema);
||||||| empty tree
=======
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodItemSchema = new Schema({
    title: String,
    image: String,
    price: Number,
    description: String,
    category: String,
});

module.exports = mongoose.model('FoodItem', FoodItemSchema);
>>>>>>> 970cf6f8706313214d0ca9bc24bd26c288d5e916
