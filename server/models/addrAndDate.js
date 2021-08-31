const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const passportLocalMongoose = require('passport-local-mongoose');

var addrAndDateSchema  = new Schema({
    
        _id:Schema.Types.ObjectId,
        settId:{type:String ,require:true},
        date:{type:Date,require:true}
    
   
}, { collection : 'addrAndDate' })

module.exports  = mongoose.model('addrAndDate', addrAndDateSchema, 'addrAndDate');