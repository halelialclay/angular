const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//const passportLocalMongoose = require('passport-local-mongoose');

var settInIsraelSchema  = new Schema({
    
        _id:Schema.Types.ObjectId,
        semel_yeshuv:{type:String ,require:true},
        name:{type:String ,require:true},
        english_name:{type:String ,require:true},
        semel_napa:{type:String ,require:true},
        shem_napa:{type:String ,require:true},
        semel_lishkat_mana:{type:String ,require:true},
        lishka:{type:String ,require:true},
        semel_moatza_ezorit:{type:String ,require:true},
        shem_moaatza:{type:String ,require:true}
    
   
}, { collection : 'settInIsrael' })

//userSchema.plugin(passportLocalMongoose);
module.exports  = mongoose.model('settInIsrael', settInIsraelSchema, 'settInIsrael');