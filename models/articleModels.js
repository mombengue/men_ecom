const Article = require('../database/articleDatabase');

const getArticles =  async () => {
    try {
        let articles = await Article.find();
        return articles;
    } 
    catch (error) {
        console.log(error.message);
    }
}; 

const getArticle = async (req, res) => {
    try {
        const id = req.params.id;
        const article = await Article.find({"_id" : id});
        return article;
    } catch (error) {
        console.log(error.message);
    }
}; 

const createArticle = async (req, res) => {
    try {
        let articles = await Article.create(req.body);
        return articles;
    } catch (error) {
        console.log(error.message);
    }
}; 

const removeArticle = async (req, res) => {
    try {
        const id = req.params.ids
        let articles = await Article.findOneAndDelete({"_id" : id});
        return articles;
    } catch (error) {
        console.log(error.message);
    }
};  

const updateArticle = async (req, res) => {
    try {
        const id = req.params.id
        let articles = await Article.findOneAndUpdate({"_id" : id}, { $set: { 
            name: req.body.name 
        }});
        return articles;
    } catch (error) {
        console.log(error.message);
    }
};

module.exports={
    getArticles,
    getArticle,
    createArticle,
    removeArticle,
    updateArticle
}