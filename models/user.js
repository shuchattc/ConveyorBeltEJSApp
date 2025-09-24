<<<<<<< HEAD
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true //sets up index for validation middleware
    },
    admin: {
        type:Boolean, 
        default: false,
    }
});

UserSchema.plugin(passportLocalMongoose); //adds username field for password

module.exports = mongoose.model('User', UserSchema);
||||||| empty tree
=======
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true //sets up index for validation middleware
    },
    admin: {
        type:Boolean, 
        default: false,
    }
});

UserSchema.plugin(passportLocalMongoose); //adds username field for password

module.exports = mongoose.model('User', UserSchema);
>>>>>>> 970cf6f8706313214d0ca9bc24bd26c288d5e916
