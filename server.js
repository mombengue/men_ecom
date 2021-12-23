require("dotenv").config({path: '.env'});

const dbConfig = require("./config/dbConfig")

const mainRouter = require('./router/mainRouter')
const adminRouter = require('./router/adminRouter')

const express = require('express')
const app = express()

const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

/* const users = [] */

/* const initializePassport = require('./passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
) */

dbConfig.dbconnexion()

// Ejs 
app.set('views', __dirname + '/views')
app.set('view engine','ejs')

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }))

app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

// Route
app.use('/', mainRouter);
app.use('/admin', adminRouter);

app.get((req,res) => {
    res.json({message:'404 Not found'});
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.HOST}:${process.env.PORT}`);
})