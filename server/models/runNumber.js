const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const passportLocalMongoose = require('passport-local-mongoose');

var runNumberSchema  = new Schema({
    
         _id:Schema.Types.ObjectId,
         num:Number
    
        }, { collection : 'runNumber' })

module.exports  = mongoose.model('runNumber', runNumberSchema, 'runNumber');