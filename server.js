require("dotenv").config({path: '.env'});

const express = require('express');
const app = express();

const dbConfig = require("./config/dbConfig");

const mainRouter = require('./router/mainRouter');
const adminRouter = require('./router/adminRouter');

/* const User = require('../database/userDatabase'); */

/* const passport = require('passport');
const LocalStrategy = require('passport-local');
const passportLocalMongoose = require('passport-local-mongoose'); */

dbConfig.dbconnexion();

// Ejs 
app.set('views', __dirname + '/views');
app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));

/* app.use(passport.initialize());
app.use(passport.session());

passport.use( new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); */

// Route
app.use('/', mainRouter);
app.use('/admin', adminRouter);

app.get((req,res) => {
    res.json({message:'404 Not found'});
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.HOST}:${process.env.PORT}`);
})