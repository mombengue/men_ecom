require("dotenv").config({path: '.env'});
const dbConfig = require("./config/dbConfig")
const mainRouter = require('./router/mainRouter')
const adminRouter = require('./router/adminRouter')

const User = require('./database/userDatabase')

const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const LocalStrategy = require('passport-local').Strategy;
const methodOverride = require('method-override')

const express = require('express')
const app = express()

dbConfig.dbconnexion()

// Passport
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
app.use(methodOverride('_method'))

// Ejs 
app.set('views', __dirname + '/views')
app.set('view engine','ejs')

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }))

// Route
app.use('/', mainRouter);
app.use('/admin', adminRouter);

app.get((req,res) => {
    res.json({message:'404 Not found'});
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.HOST}:${process.env.PORT}`);
})