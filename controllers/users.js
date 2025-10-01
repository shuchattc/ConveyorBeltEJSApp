const express = require('express');
const router = express.Router();
const CatchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const users = require('../controllers/users');
const {isLoggedIn} = require('../middleware');
const passport = require('passport');
const User = require('../models/user');
const bcrypt = require('bcrypt');

module.exports.getRegisterForm = async(req,res) => { //shows registration form page
    res.render('users/register');
};

module.exports.registerUser = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const admin = req.body.admin === "Boolean";
        const user = new User({ email, username, admin });
        const userRegex = /^[a-zA-Z0-9_]{4,15}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

        if (!emailRegex.test(email) || !passRegex.test(password) || !userRegex.test(username)) {
          req.flash('error', 'Invalid input');
          return res.redirect('/register');
        }
        console.log("NEW USER +++ ", user);
        const registeredUser = await User.register(user, password);
        console.log(registeredUser);
        req.login(registeredUser, err => {
            if (err) return next(err);
            console.log(registeredUser);
            req.flash('success', 'Welcome to Sushi App!', registeredUser.username);
            res.redirect('/home');
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }
};

module.exports.getLoginPage = (req,res) =>{
    res.render('users/login');
};

module.exports.login = (req,res) => { 
    req.flash('success', 'Welcome back!');
    const redirectUrl = req.session.returnTo || '/home';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
};

module.exports.loginGuest = async (req, res, next) => {
  try {
    // Generate unique username and email
    const randomSuffix = Math.floor(100000 + Math.random() * 900000);
    const guestUsername = `guest_${randomSuffix}`;
    const guestEmail = `guest_${randomSuffix}@example.com`;

    const password = 'guestpassword';

    // Create new guest account
    const guestUser = new User({
      username: guestUsername,
      email: guestEmail,
      role: 'guest',
    });

    // Use passport-local-mongoose helper to set the password properly
    await User.register(guestUser, password);

    // Inject credentials so passport.authenticate can log in
    req.body.username = guestUsername;
    req.body.password = password;

    passport.authenticate('local', (err, user, info) => {
      if (err) return next(err);
      if (!user) {
        console.error("Guest login failed:", info);
        return res.redirect('/');
      }

      req.logIn(user, (err) => {
        if (err) return next(err);
        return res.redirect('/home');
      });
    })(req, res, next);

  } catch (err) {
    next(err);
  }
};

module.exports.logout = (req,res) => {
    req.logout(function(err){
        if(err){
            return next(err);
        }
        req.flash('success', 'You logged out');
        res.redirect('/');
    });
}
