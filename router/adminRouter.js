const express = require('express');
const router = express.Router();
/* const passport = require('passport'); */
const article = require('../models/articleModels');
const categorie = require('../models/categorieModels');
const user = require('../models/userModels'); 

router.get('/', async (req, res) => {
    let countUser = await user.getUsers();
    let countCategorie = await categorie.getCategories();
    let countArticle = await article.getArticles();

    res.render('pages/admin/dashboard', {countUser, countArticle, countCategorie});
});

router.get('/utilisateurs', async (req, res) => {
    let users = await user.getUsers();

    res.render('pages/admin/utilisateurs', {users});
});

router.post('/utilisateurs', async (req, res) => {
    user.createUser(req, res)

    res.redirect('/admin/utilisateurs');
});

router.get('/articles', async (req, res) => {
    let categories = await categorie.getCategories();
    let articles = await article.getArticles();
    
    res.render('pages/admin/articles', {articles, categories});
});

router.post('/articles', async (req, res) => {
    article.createArticle(req, res)

    res.redirect('/admin/articles');
});


router.delete('/article/:id', (req, res) => {
    article.removeArticle(req, res);

    res.redirect('/admin/articles');
});

router.get('/article/:id', async (req, res) => {
    let editArticle = await article.getArticle(req, res);
    let articles = await article.getArticles();
    let categories = await categorie.getCategories();

    res.render('pages/admin/article', {editArticle, articles, categories});
});

router.put('/article/:id', (req, res) => {
    article.updateArticle(req, res);

    res.redirect('/admin/articles');
});

router.get('/categories', async (req, res) => {
    let categories = await categorie.getCategories();

    res.render('pages/admin/categories', {categories});
});

router.post('/categories', (req, res) => {
    categorie.createCategorie(req, res)
    
    res.redirect('/admin/categories');
});

router.delete('/categorie/:id', (req, res) => {
    categorie.removeCategorie(req, res);

    res.redirect('/admin/categories');
});

router.get('/categorie/:id', async (req, res) => {
    let editCategorie = await categorie.getCategorie(req, res); 
    let categories = await categorie.getCategories();

    res.render('pages/admin/categorie', {editCategorie, categories});
});

router.put('/categorie/:id', (req, res) => {
    categorie.updateCategorie(req, res);

    res.redirect('/admin/categories');
});

router.get('/ventes', (req, res) => {
    res.render('pages/admin/ventes');
});

module.exports = router;