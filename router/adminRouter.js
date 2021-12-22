const express = require('express');
const router = express.Router();
/* const passport = require('passport'); */
const article = require('../models/articleModels');
const categorie = require('../models/categorieModels');
/* const user = require('../models/userModels'); */

router.get('/', (req, res) => {
    res.render('pages/admin/dashboard');
});

router.get('/utilisateurs', (req, res) => {
    res.render('pages/admin/utilisateurs');
});

router.get('/ventes', (req, res) => {
    res.render('pages/admin/ventes');
});

router.get('/articles', (req, res) => {
    res.render('pages/admin/articles');
});

router.get('/categories', (req, res) => {
    res.render('pages/admin/categories');
});

module.exports = router;