const User = require('../database/userDatabase');

const getUsers =  async (req, res) => {
    try {
        const users = await User.find();
    
        res.send(users);
        
    } catch (error) {
        console.log(error.message);
    }
}; 

const getUser = async (req, res) => {
    try {
        const id = req.params.id;
        
        const user = await User.find({"_id" : id});
        
        res.send(user);
        
    } catch (error) {
        console.log(error.message);
    }
}; 

const createUser = async (req, res) => {
    try {
        await User.create(req.body);

        const users = await User.find();
    
        res.send(users);
        
    } catch (error) {
        console.log(error.message);
    }
}; 

const removeUser = async (req, res) => {
    try {
        const id = req.params.ids

        await User.findOneAndDelete({"_id" : id});

        const users = await User.find();
    
        res.send(users);
        
    } catch (error) {
        console.log(error.message);
    }
};  

const updateUser = async (req, res) => {
    try {
        const id = req.params.id

        await User.findOneAndUpdate({"_id" : id}, { $set: { 
            name: req.body.name 
        }});

        const users = await User.find();
    
        res.send(users);
        
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