const Categorie = require('../database/categorieDatabase');

const getCategories =  async () => {
    try {
        let categories = await Categorie.find();
        return categories;
    } 
    catch (error) {
        console.log(error.message);
    }
}; 

const getCategorie = async (req, res) => {
    try {
        const id = req.params.id;
        const categorie = await Categorie.find({"_id" : id});
        return categorie;
    } catch (error) {
        console.log(error.message);
    }
}; 

const createCategorie = async (req, res) => {
    try {
        let categories = await Categorie.create(req.body);
        return categories;
    } catch (error) {
        console.log(error.message);
    }
}; 

const removeCategorie = async (req, res) => {
    try {
        const id = req.params.id
        let categories = await Categorie.findOneAndDelete({"_id" : id});
        return categories;
    } catch (error) {
        console.log(error.message);
    }
};  

const updateCategorie = async (req, res) => {
    try {
        const id = req.params.id
        let categories = await Categorie.findOneAndUpdate({"_id" : id}, { $set: { 
            name: req.body.name 
        }});
        return categories;
    } catch (error) {
        console.log(error.message);
    }
};

module.exports={
    getCategories,
    getCategorie,
    createCategorie,
    removeCategorie,
    updateCategorie
}