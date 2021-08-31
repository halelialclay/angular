const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const passportLocalMongoose = require('passport-local-mongoose');

var blogSchema  = new Schema({
    
         _id:Schema.Types.ObjectId,
         userId:{type:String,require:true},
         title:{type:String ,require:true},
         content:{type:String},
         published:{type:Boolean},
         publishDate:{type:String,require:true},
         writer:{type:String,require:true}
    
        }, { collection : 'blog' })

module.exports  = mongoose.model('blog', blogSchema, 'blog');