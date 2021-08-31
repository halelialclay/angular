const mongoose = require("mongoose");
const settInIsrael = require("./settInIsrael");
const Schema = mongoose.Schema;
//const passportLocalMongoose = require('passport-local-mongoose');

var statisticSchema  = new Schema({
    
        _id:Schema.Types.ObjectId,
        date:{type:Date,require:true},
        settId:{type:String,require:true},
        userId:{type:String,require:true},
        userName:{type:String,require:true},
        addresses:{type:Object,require:true},
        addressesBit:{type:Object,require:true}


        
    
   
}, { collection : 'statistic' })

module.exports  = mongoose.model('statistic', statisticSchema, 'statistic');
