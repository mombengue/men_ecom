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

router.get('/articles', async (req, res) => {
    let articles = await article.getArticles();

    res.render('pages/articles', {articles});
});

router.get('/a-propos', (req, res) => {
    res.render('pages/apropos');
});

router.get('/connexion', (req, res) => {
    res.render('pages/login');
});

router.post('/connexion', passport.authenticate('local', 
    {failureRedirect: '/admin', failureFlash: true }
    ), (req, res) => {
        req.flash("success", "Login Successful!");
        res.redirect("/admin");
    }
);

module.exports = router;