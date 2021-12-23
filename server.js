require("dotenv").config({path: '.env'});

const express = require('express');
const app = express();

const dbConfig = require("./config/dbConfig");

const mainRouter = require('./router/mainRouter');
const adminRouter = require('./router/adminRouter');

const passport = require('passport');
const initializePassport = require('./passport-config')
initializePassport(
    passport, 
    email => users.find(user => user.email === email) 
    )

dbConfig.dbconnexion();

// Ejs 
app.set('views', __dirname + '/views');
app.set('view engine','ejs');

app.use(express.static(__dirname + '/public'));

// Route
app.use('/', mainRouter);
app.use('/admin', adminRouter);

app.get((req,res) => {
    res.json({message:'404 Not found'});
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.HOST}:${process.env.PORT}`);
})