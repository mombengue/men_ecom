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
        
        res.send(categorie);
        
    } catch (error) {
        console.log(error.message);
    }
}; 

const createCategorie = async (req, res) => {
    try {
        await Categorie.create(req.body);

        const categories = await Categorie.find();
    
        res.send(categories);
        
    } catch (error) {
        console.log(error.message);
    }
}; 

const removeCategorie = async (req, res) => {
    try {
        const id = req.params.ids

        await Categorie.findOneAndDelete({"_id" : id});

        const categories = await Categorie.find();
    
        res.send(categories);
        
    } catch (error) {
        console.log(error.message);
    }
};  

const updateCategorie = async (req, res) => {
    try {
        const id = req.params.id

        await Categorie.findOneAndUpdate({"_id" : id}, { $set: { 
            name: req.body.name 
        }});

        const categories = await Categorie.find();
    
        res.send(categories);
        
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