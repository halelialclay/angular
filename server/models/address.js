const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const passportLocalMongoose = require('passport-local-mongoose');

var addressSchema  = new Schema({
    
        _id:Schema.Types.ObjectId,
        settId:{type:String ,require:true},
        address:{type:String ,require:true},
        latitude:{type:Number},
        longitude:{type:Number}
    
   
}, { collection : 'addresses' })

module.exports  = mongoose.model('addresses', addressSchema, 'addresses');