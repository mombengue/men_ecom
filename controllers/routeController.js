const express = require('express');
const router = express.Router();
/* const passport = require('passport'); */
const article = require('../models/articleModels');
const categorie = require('../models/categorieModels');
/* const user = require('../models/userModels'); */

router.get('/', (req, res) => {
    var articles = article.getArticles;
    var categories = categorie.getCategories;

    res.render('pages/home', { articles, categories });
});

router.get('/articles', (req, res) => {
    res.render('pages/article');
});

router.get('/a-propos', (req, res) => {
    res.render('pages/apropos');
});

router.get('/connexion', (req, res) => {
    res.render('pages/login');
});


/* router.get('/register', (req,res) => {
	res.render('pages/register');
});

router.post('/register', (req,res) => {
	var newUser = user.createUser(
        {
            name:req.body.name,
            email:req.body.email,
            password:req.body.password
        });
});


router.post('/login', passport.authenticate('local', 
    {successRedirect: '/panier', failureRedirect: '/login'})
);

router.get('/logout', (req,res) => {
	req.logout();
	res.redirect('/');
}); */


module.exports = router;