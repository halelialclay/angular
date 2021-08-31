const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var users=require("../models/user.js");
const settInIsrael = require("../models/settInIsrael.js");

//const passportLocalMongoose = require('passport-local-mongoose');

var divByDateSchema  = new Schema({
    
        _id:Schema.Types.ObjectId,
        date:{type:Date,require:true},
        settId:{type:Schema.Types.ObjectId,require:true,ref:settInIsrael},
        userId:{type:Schema.Types.ObjectId,require:true,ref:users},
        addresses:{type:Object,require:true},
        addressesBit:{type:Object,require:true}


        
    
   
}, { collection : 'divByDate' })

module.exports  = mongoose.model('divByDate', divByDateSchema, 'divByDate');


