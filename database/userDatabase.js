const mongoose=require('mongoose');

/* var passportLocalMongoose = require('passport-local-mongoose'); */

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    created:{
        type: Date,
    },
});

userSchema.plugin(passportLocalMongoose);

module.exports=mongoose.model('User', userSchema);