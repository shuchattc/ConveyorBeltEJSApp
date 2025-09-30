const express = require('express');
const session = require('express-session');
const ejsMate = require('ejs-mate'); 
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const flash = require('connect-flash');
const UserModel = require('./models/user')
const passport = require('passport');
const localPassport = require('passport-local');
const ExpressError = require('./utils/ExpressError');
const env = require('dotenv').config();
const dbUrl = process.env.DATABASE_URL;
const productRoutes = require('./routes/product');
const kitchenRoutes = require('./routes/kitchen');
const userRoutes = require('./routes/users');
const checkoutRoutes = require('./routes/checkout');
const helmet = require('helmet');

if(process.env.Node_ENV !== 'production'){
    require('dotenv').config();
}
//mongodb://localhost:27017/sushiApp
mongoose.connect(dbUrl, {});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();
app.engine('ejs', ejsMate)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.set('trust proxy', 1); // trust first proxy
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],

        scriptSrc: [
          "'self'",
          "https://code.jquery.com",
          "https://cdn.jsdelivr.net",
          "https://cdn.jsdelivr.net/npm",
          "https://stackpath.bootstrapcdn.com"
        ],

        styleSrc: [
          "'self'",
          "https://cdn.jsdelivr.net",
          "https://stackpath.bootstrapcdn.com",
          "'unsafe-inline'" // ⚠️ only if inline styles are needed
        ],

        imgSrc: [
          "'self'",
          "https://plus.unsplash.com"
        ],
      },
    },
    crossOriginResourcePolicy: false,
    xDownloadOptions: false,
  })
);

app.use(session({    
    secret: 'thisisasecret',
    resave: false,
    saveUninitialized: true,
    cookie: { 
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        secure: false
    }
}));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localPassport(UserModel.authenticate()));

passport.serializeUser(UserModel.serializeUser());
passport.deserializeUser(UserModel.deserializeUser());


app.use((req, res, next) => {
    if (!['/login', '/home'].includes(req.originalUrl)){
        req.session.returnTo = req.originalUrl;
    }
    if(req.user){
        res.locals.currentUser = req.user.toObject();
    }else{
        res.locals.currentUser = null;
    }    
    console.log("APP.JS ----- ", res.locals.currentUser);
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
});



app.use('/', productRoutes);
app.use('/kitchen', kitchenRoutes, productRoutes);
app.use('/', userRoutes);
app.use('/checkout', checkoutRoutes);

app.get('/', (req,res) => {
    res.render('splashscreen');
});

app.get('/home', (req, res) => {
    res.render('home', {messages: req.flash('success')});
});

app.all(/(.*)/, (err, req, res, next) => {
    return next(new ExpressError(err, 404));
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!'
    res.status(statusCode).render('error', { err })
});

app.listen(3000, () => {
    console.log('Serving on port 3000');
});
