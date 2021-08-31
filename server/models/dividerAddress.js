const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const passportLocalMongoose = require('passport-local-mongoose');

var dividerAddressSchema  = new Schema({
    
        _id:Schema.Types.ObjectId,
        settId:{type:String ,require:true},
        dividerId:{type:String ,require:true},
        date:{type:Date,require:true}
    
   
}, { collection : 'dividerAddress' })

module.exports  = mongoose.model('dividerAddress', dividerAddressSchema, 'dividerAddress');