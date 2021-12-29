const User = require('../database/userDatabase');

const getUsers =  async () => {
    try {
        let users = await User.find();
        return users;
        
    } catch (error) {
        console.log(error.message);
    }
}; 

const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        const user = await User.find({"_id" : id});
        return user;
    } catch (error) {
        console.log(error.message);
    }
}; 

const createUser = async (req, res) => {
    try {
        let users = await User.create(req.body);
        return users;
    } catch (error) {
        console.log(error.message);
    }
}; 

const removeUser = async (req, res) => {
    try {
        const id = req.params.ids
        let users = await User.findOneAndDelete({"_id" : id});
        return users;
    } catch (error) {
        console.log(error.message);
    }
};  

const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        let users = await User.findOneAndUpdate({"_id" : id}, { $set: { 
            name: req.body.name 
        }});
        return users;
    } catch (error) {
        console.log(error.message);
    }
};

module.exports={
    getUsers,
    getUser,
    createUser,
    removeUser,
    updateUser
}