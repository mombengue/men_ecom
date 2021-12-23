const mongoose=require('mongoose');

const articleSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    prix:{
        type:String,
        required:true
    },
    categorie : [
        {
            type : mongoose.SchemaTypes.ObjectId,
            ref: "categorie",
        }
    ]
});

module.exports=mongoose.model('Article', articleSchema);