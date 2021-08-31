const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const passportLocalMongoose = require('passport-local-mongoose');

var userSchema  = new Schema({
   _id: Schema.Types.ObjectId,
   userName:{type:String ,require:true},
   firstName:{type:String,require:true},
   lastName:{type:String ,require:true},
   pass:{ type:String, require:true },
   phone:{ type:String, require:true} ,
   role:{type:String},
   
}, { collection : 'user' })

//userSchema.plugin(passportLocalMongoose);
module.exports  = mongoose.model('users1', userSchema, 'users1');
