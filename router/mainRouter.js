const express = require('express')
const router = express.Router()
const article = require('../models/articleModels')
const categorie = require('../models/categorieModels')
const user = require('../models/userModels')

const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')


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