const express = require('express')
const app = express()

const router = express.Router()
const article = require('../models/articleModels')
const categorie = require('../models/categorieModels')
const user = require('../models/userModels')

const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

const initializePassport = require('../passport-config')
initializePassport(
    passport,
    email => user.find(user => user.email === email),
    id => user.find(user => user.id === id)
)

router.get('/', async (req, res) => {
    let articles = await article.getArticles();

    res.render('pages/home', {articles});
});

router.get('/articles', (req, res) => {
    res.render('pages/articles');
});

router.get('/a-propos', (req, res) => {
    res.render('pages/apropos');
});

router.get('/connexion', (req, res) => {
    res.render('pages/login');
});

router.post('/connexion', passport.authenticate('local', {
        successRedirect: '/admin',
        failureRedirect: '/connexion',
        failureFlash: true
    })
)

function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/connexion')
} 
  
function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/admin')
    }
    next()
}



module.exports = router;