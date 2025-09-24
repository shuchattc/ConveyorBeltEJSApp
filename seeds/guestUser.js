const mongoose = require('mongoose');
const User = require('../models/user');

mongoose.connect('mongodb://localhost:27017/sushiApp', {});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", async () => {
    console.log("Database connected");

    try {
        // Check if guest user already exists
        const existing = await User.findOne({ username: 'guest' });
        if (existing) {
            console.log('Guest user already exists');
        } else {
            const guestUser = new User({
                email: 'guest@guest.com',
                username: "guest",
                admin: false
            });

            await User.register(guestUser, 'guestpassword');
            console.log('Guest user created');
        }
    } catch (err) {
        console.error('Error creating guest user:', err);
    } finally {
        mongoose.connection.close();
    }
});