const article = require('../models/articleModels')
const categorie = require('../models/categorieModels')
const user = require('../models/userModels')

const User = require('../database/userDatabase')

const express = require('express')
const router = express.Router()
const app = express()

var passport = require('passport');

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

module.exports = router;