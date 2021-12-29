const express = require('express');
const router = express.Router();
/* const passport = require('passport'); */
const article = require('../models/articleModels');
const categorie = require('../models/categorieModels');
const user = require('../models/userModels'); 

router.get('/', (req, res) => {
    res.render('pages/admin/dashboard');
});

router.get('/utilisateurs', (req, res) => {
    res.render('pages/admin/utilisateurs');
});

router.post('/utilisateurs', async (req, res) => {
    user.createUser(req, res)

    res.redirect('/admin/utilisateurs');
});

router.get('/ventes', (req, res) => {
    res.render('pages/admin/ventes');
});

router.get('/articles', async (req, res) => {
    let categories = await categorie.getCategories();
    
    res.render('pages/admin/articles', {categories});
});

router.post('/articles', async (req, res) => {
    article.createArticle(req, res)

    res.redirect('/admin/articles');
});

router.get('/categories', (req, res) => {
    res.render('pages/admin/categories');
});

router.post('/categories', async (req, res) => {
    categorie.createCategorie(req, res)

    res.redirect('/admin/categories');
});

module.exports = router;