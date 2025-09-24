<<<<<<< HEAD
const mongoose = require('mongoose');
const Foods = require('../models/foodItems');

mongoose.connect('mongodb://localhost:27017/sushiApp', {});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const foodArray = [
    new Foods({
        price: 2,
        title: "Edamame",
        image: `${("../pictures/appetizer/edamame.jpg")}`,
        description: "Hot salted edamame",
        category: "appetizer",
    }),
    new Foods({
        price: 3,
        title: "Gyoza",
        image: `${("../pictures/appetizer/gyoza.jpg")}`,
        description: "Pan fried pork gyoza. (6 pieces)",
        category: "appetizer",
    }),
    new Foods({
        price: 3.50,
        title: "Negima",
        image: `${("../pictures/appetizer/negima.jpg")}`,
        description: "Skewer with chicken and leek glazed in teriyaki sauce. (2 skewers)",
        category: "appetizer",
    }),
    new Foods({
        price: 2,
        title: "Pickled Cucumber Salad",
        image: `${("../pictures/appetizer/pickled_cucumbers.jpg")}`,
        description: "Cucumber salad in a vinegar dressing",
        category: "appetizer",
    }),
    new Foods({
        price: 4.50,
        title: "Takoyaki",
        image: `${("../pictures/appetizer/takoyaki.jpg")}`,
        description: "Fried dough balls filled with octopus and a teriyaki sauce on top. (8 pieces)",
        category: "appetizer",
    }),
    new Foods({
        price: 3,
        title: "Cucumber Roll",
        image: `${("../pictures/sushi/cucumberRoll.jpg")}`,
        description: "Cucumber Roll wrapped in nori.",
        category: "sushi",
    }),
    new Foods({
        price: 4.50,
        title: "Ikura Nigiri",
        image: `${("../pictures/sushi/ikuraNigiri.jpg")}`,
        description: "Sushi topped with Cod Roe wrapped in nori.",
        category: "sushi",
    }),
    new Foods({
        price: 5,
        title: "Philly Roll",
        image: `${("../pictures/sushi/phillyRoll.jpg")}`,
        description: "Tuna and Cucumber roll with cream cheese.",
        category: "sushi",
    }),
    new Foods({
        price: 5,
        title: "Salmon Nigiri",
        image: `${("../pictures/sushi/salmonNigiri.jpg")}`,
        description: "Bed of rice topped with fresh salmon",
        category: "sushi",
    }),
    new Foods({
        price: 5,
        title: "Tuna Nigiri",
        image: `${("../pictures/sushi/tunaNigiri.jpg")}`,
        description: "Bed of rice topped with fresh tuna.",
        category: "sushi",
    }),
    new Foods({
        price: 3,
        title: "Beer",
        image: `${("../pictures/drink/beer.jpg")}`,
        description: "Ice cold beer",
        category: "drink",
    }),
    new Foods({
        price: 2.50,
        title: "Black Tea",
        image: `${("../pictures/drink/blacktea.jpg")}`,
        description: "Hot black tea.",
        category: "drink",
    }),
    new Foods({
        price: 2.50,
        title: "Green Tea",
        image: `${("../pictures/drink/greentea.jpg")}`,
        description: "Hot Green Tea",
        category: "drink",
    }),
    new Foods({
        price: 3,
        title: "Melon Soda",
        image: `${("../pictures/drink/melonsoda.jpg")}`,
        description: "Ice cold melon soda with cherry garnish.",
        category: "drink",
    }),
    new Foods({
        price: 5,
        title: "Ramune",
        image: `${("../pictures/drink/ramnune.jpg")}`,
        description: "Ice cold ramune soda.",
        category: "drink",
    }),
    new Foods({
        price: 3,
        title: "Mochi Ice Cream",
        image: `${("../pictures/dessert/mochi_icecream.jpg")}`,
        description: "Ice Cream wrapped in soft mochi.",
        category: "dessert",
    }),
    new Foods({
        price: 2.50,
        title: "Shaved Ice",
        image: `${("../pictures/dessert/shavedice.jpg")}`,
        description: "Shaved Ice flavored with a fruity syrup.",
        category: "dessert",
    }),
    new Foods({
        price: 2.50,
        title: "Strawberry Parfait",
        image: `${("../pictures/dessert/strawberryParfait.jpg")}`,
        description: "Vanilla Ice Cream with strawberries and strawberry syrup on top.",
        category: "dessert",
    }),
    new Foods({
        price: 3,
        title: "Taiyaki",
        image: `${('../pictures/dessert/taiyaki.jpg')}`,
        description: "Fish shaped pastry with red bean filling",
        category: "dessert",
    }),
    new Foods({
        price: 5,
        title: "Taiyaki Ice Cream",
        image: `${("../pictures/dessert/ramnune.jpg")}`,
        description: "Fish shaped pastry cone, with vanilla ice cream.",
        category: "dessert",
    }),
];

const seedDB = async () => {
   try{
    await Foods.deleteMany({});
    for (let i = 0; i < foodArray.length; i++) {
        await foodArray[i].save();
    }
    }
    catch (err){
    console.error(err);
    }
}

seedDB().then(() => {
    console.log("seeded menu");
    console.log(foodArray);
    mongoose.connection.close();
})
||||||| empty tree
=======
const mongoose = require('mongoose');
const Foods = require('../models/foodItems');

mongoose.connect('mongodb://localhost:27017/sushiApp', {});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const foodArray = [
    new Foods({
        price: 2,
        title: "Edamame",
        image: `https://plus.unsplash.com/premium_photo-1666318300348-a4d0226d81ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWRhbWFtZXxlbnwwfHwwfHx8MA%3D%3D`,
        description: "Hot salted edamame",
        category: "appetizer",
    }),
    new Foods({
        price: 3,
        title: "Gyoza",
        image: `https://images.unsplash.com/photo-1738681336104-608b4e7dc3b0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        description: "Pan fried pork gyoza. (6 pieces)",
        category: "appetizer",
    }),
    new Foods({
        price: 3.50,
        title: "Negima",
        image: `https://images.unsplash.com/photo-1708597525178-6c302364f37c?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        description: "Skewer with chicken and leek glazed in teriyaki sauce. (2 skewers)",
        category: "appetizer",
    }),
    new Foods({
        price: 2,
        title: "Pickled Cucumber Salad",
        image: `https://images.unsplash.com/photo-1652088083542-dae1576b7232?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        description: "Cucumber salad in a vinegar dressing",
        category: "appetizer",
    }),
    new Foods({
        price: 4.50,
        title: "Takoyaki",
        image: `https://images.unsplash.com/photo-1652752731860-ef0cf518f13a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        description: "Fried dough balls filled with octopus and a teriyaki sauce on top. (8 pieces)",
        category: "appetizer",
    }),
    new Foods({
        price: 3,
        title: "Cucumber Roll",
        image: `https://plus.unsplash.com/premium_photo-1664472644125-f12aecccdd52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN1c2hpJTIwY3VjdW1iZXJ8ZW58MHx8MHx8fDA%3D`,
        description: "Cucumber Roll wrapped in nori.",
        category: "sushi",
    }),
    new Foods({
        price: 4.50,
        title: "Ikura Nigiri",
        image: `https://images.unsplash.com/photo-1677300348383-0b20a876461a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aWt1cmF8ZW58MHx8MHx8fDA%3D`,
        description: "Sushi topped with Cod Roe wrapped in nori.",
        category: "sushi",
    }),
    new Foods({
        price: 5,
        title: "Philly Roll",
        image: `https://images.unsplash.com/photo-1729698597384-d218328dc3a9?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        description: "Tuna and Cucumber roll with cream cheese.",
        category: "sushi",
    }),
    new Foods({
        price: 5,
        title: "Salmon Nigiri",
        image: "https://images.unsplash.com/photo-1607247098731-5bf6416d2e8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        description: "Bed of rice topped with fresh salmon",
        category: "sushi",
    }),
    new Foods({
        price: 5,
        title: "Tuna Nigiri",
        image: `https://plus.unsplash.com/premium_photo-1723485605996-2f0e04e82575?q=80&w=1037&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        description: "Bed of rice topped with fresh tuna.",
        category: "sushi",
    }),
    new Foods({
        price: 3,
        title: "Beer",
        image: `https://images.unsplash.com/photo-1608270586620-248524c67de9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        description: "Ice cold beer",
        category: "drink",
    }),
    new Foods({
        price: 2.50,
        title: "Black Tea",
        image: `https://images.unsplash.com/photo-1610137312679-8de3a836b455?q=80&w=1533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        description: "Hot black tea.",
        category: "drink",
    }),
    new Foods({
        price: 2.50,
        title: "Green Tea",
        image: `https://images.unsplash.com/photo-1627894005682-166e8687356a?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        description: "Hot Green Tea",
        category: "drink",
    }),
    new Foods({
        price: 3,
        title: "Melon Soda",
        image: `https://images.unsplash.com/photo-1620400183452-c6e4c7933bd3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        description: "Ice cold melon soda with cherry garnish.",
        category: "drink",
    }),
    new Foods({
        price: 5,
        title: "Ramune",
        image: `https://images.unsplash.com/photo-1619995757657-fb467a837ea2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        description: "Ice cold ramune soda.",
        category: "drink",
    }),
    new Foods({
        price: 3,
        title: "Mochi Ice Cream",
        image: `https://plus.unsplash.com/premium_photo-1701104844024-01bd7d26e119?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        description: "Ice Cream wrapped in soft mochi.",
        category: "dessert",
    }),
    new Foods({
        price: 2.50,
        title: "Shaved Ice",
        image: `https://images.unsplash.com/photo-1716626669148-1731504429dd?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        description: "Shaved Ice flavored with a fruity syrup.",
        category: "dessert",
    }),
    new Foods({
        price: 2.50,
        title: "Strawberry Parfait",
        image: `https://plus.unsplash.com/premium_photo-1692309185293-5302f5fab46f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        description: "Vanilla Ice Cream with strawberries and strawberry syrup on top.",
        category: "dessert",
    }),
    new Foods({
        price: 3,
        title: "Taiyaki",
        image: `https://images.unsplash.com/photo-1602030029545-52959ef2927c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        description: "Fish shaped pastry with red bean filling",
        category: "dessert",
    }),
    new Foods({
        price: 5,
        title: "Taiyaki Ice Cream",
        image: `https://images.unsplash.com/photo-1612127553957-871065577365?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        description: "Fish shaped pastry cone, with vanilla ice cream.",
        category: "dessert",
    }),
];

const seedDB = async () => {
   try{
    await Foods.deleteMany({});
    for (let i = 0; i < foodArray.length; i++) {
        await foodArray[i].save();
    }
    }
    catch (err){
    console.error(err);
    }
}

seedDB().then(() => {
    console.log("seeded menu");
    console.log(foodArray);
    mongoose.connection.close();
})
>>>>>>> 970cf6f8706313214d0ca9bc24bd26c288d5e916
