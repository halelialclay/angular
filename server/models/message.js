const mongoose = require("mongoose");
const user = require("./user");
const Schema = mongoose.Schema;
//const passportLocalMongoose = require('passport-local-mongoose');

var messageSchema  = new Schema({
    
        _id:Schema.Types.ObjectId,
        sendId:{type:Schema.Types.ObjectId,require:true,ref:user},
        getId:{type:Schema.Types.ObjectId,require:true,ref:user},
        publishDate:{type:String,require:true},
        date:{type:String,require:true},
        isN:{type:Boolean,require:true},
        runNumber:{type:Number}

}, { collection : 'message' })

module.exports  = mongoose.model('message', messageSchema, 'message');