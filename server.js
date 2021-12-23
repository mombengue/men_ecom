require("dotenv").config({path: '.env'});

const dbConfig = require("./config/dbConfig")

const mainRouter = require('./router/mainRouter')
const adminRouter = require('./router/adminRouter')

const express = require('express')
const app = express()

dbConfig.dbconnexion()

// Ejs 
app.set('views', __dirname + '/views')
app.set('view engine','ejs')

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded({ extended: false }))

// Route
app.use('/', mainRouter);
app.use('/admin', adminRouter);

app.get((req,res) => {
    res.json({message:'404 Not found'});
});

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.HOST}:${process.env.PORT}`);
})