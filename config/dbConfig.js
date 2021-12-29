const mongoose = require("mongoose");

const dbconnexion = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/hijab', () => {
            console.log('Successfully connected to mongodb');
        });
    } 
    catch (error) {
        console.log(error);
    }
  
};

module.exports = {
    dbconnexion
}