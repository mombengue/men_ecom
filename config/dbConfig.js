const mongoose = require("mongoose");

const dbconnexion = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, () => {
            console.log('Successfully connected to mongodb instance');
        });
    } 
    catch (error) {
        console.log(error.message);
    }
  
};

module.exports = {
    dbconnexion
}
