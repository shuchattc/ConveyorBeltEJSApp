const express = require('express');
const router = express.Router();
const CatchAsync = require('../utils/catchAsync');
const users = require('../controllers/users');
const passport = require('passport');

router.route('/register')
.get(CatchAsync(users.getRegisterForm))
.post(CatchAsync(users.registerUser));

router.route('/login')
.get(users.getLoginPage)
.post(passport.authenticate('local', {failureFlash: true, failureRedirect: '/login'}), users.login);

router.post('/login/guest', users.loginGuest);

router.get('/logout', users.logout);

module.exports = router;