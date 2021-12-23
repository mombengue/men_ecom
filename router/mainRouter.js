const express = require('express')
const router = express.Router()
const article = require('../models/articleModels')
const categorie = require('../models/categorieModels')

const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')

const users = []

const initializePassport = require('../passport-config')
initializePassport(
  passport,
  email => users.find(user => user.email === email),
  id => users.find(user => user.id === id)
)

router.get('/', (req, res) => {
    var articles = article.getArticles;
    var categories = categorie.getCategories;

    res.render('pages/home', { articles, categories });
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

router.post('/connexion', checkNotAuthenticated, passport.authenticate('local', {
        successRedirect: '/admin/',
        failureRedirect: '/connexion',
        failureFlash: true
    })
)

/* function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
    res.redirect('/connexion')
} */
  
function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/admin')
    }
    next()
}



module.exports = router;