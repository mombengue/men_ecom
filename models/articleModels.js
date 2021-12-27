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
        await Article.create(req.body);

        const articles = await Article.find();
    
        return articles;
        
    } catch (error) {
        console.log(error.message);
    }
}; 

const removeArticle = async (req, res) => {
    try {
        const id = req.params.ids

        await Article.findOneAndDelete({"_id" : id});

        const articles = await Article.find();
    
        res.send(articles);
        
    } catch (error) {
        console.log(error.message);
    }
};  

const updateArticle = async (req, res) => {
    try {
        const id = req.params.id

        await Article.findOneAndUpdate({"_id" : id}, { $set: { 
            name: req.body.name 
        }});

        const articles = await Article.find();
    
        res.send(articles);
        
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