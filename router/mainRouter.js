const express = require('express');
const router = express.Router();
const article = require('../models/articleModels');
const categorie = require('../models/categorieModels');

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

/* router.post('/connexion', (req, res, next), passport.authenticate('local', {
    successRedirect: '/admin/',
    failureRedirect: '/connexion',
    failureFlash: true
})); */



module.exports = router;