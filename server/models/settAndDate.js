const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const passportLocalMongoose = require('passport-local-mongoose');

var settAndDateSchema  = new Schema({
    
        _id:Schema.Types.ObjectId,
        settId:{type:String ,require:true},
        date:{type:Date,require:true}
    
   
}, { collection : 'settAndDate' })

module.exports  = mongoose.model('settAndDate', settAndDateSchema, 'settAndDate');