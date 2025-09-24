<<<<<<< HEAD
module.exports.isLoggedIn = (req,res, next) => {
    if(!req.isAuthenticated()){
        req.flash('error', 'You must be signed in as an admin');
        return res.redirect('/login');
    };
    next();
}
||||||| empty tree
=======
module.exports.isLoggedIn = (req,res, next) => {
    if(!req.isAuthenticated()){
        req.flash('error', 'You must be signed in as an admin');
        return res.redirect('/login');
    };
    next();
}

module.exports.validateFunc = (req, res, next) => {
    const {error} = Order.validate(req.body);
    if (error){
        const msg = error.details.map(el => el.message).join(',');
        throw new ExpressError(msg, 400);
    }else{next();}
}
>>>>>>> 970cf6f8706313214d0ca9bc24bd26c288d5e916
