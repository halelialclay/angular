var express = require('express');
var router = express.Router();

var sett=require("../models/settInIsrael.js");
var settAndDate=require("../models/settAndDate.js");


router.get('/', function(req, res, next) {
    var date=req.query.date;
    console.log(date)
   
    settAndDate.find({"date": date}, function(err, result) {
        if (err) {
          console.log(err);
        } else {
            if(result.length===0){
            console.log(result)
                //sett=null;
                res.send({_id:null});
            }
            else
            res.send(result[0]);
        }
      });
});


router.post('/', function(req, res, next) {
 var data = req.body;
 console.log(data)


 if(data._id==null){
    var d = new settAndDate();
    d.settId=data.settId;
    d.date=data.date;
    settAndDate.insertMany(d, function(err,update) {
        if (err) 
            console.log(err);
        else
        {
         res.send(update);}
    })
    }
 else
  {
    settAndDate.findByIdAndUpdate(data._id,{settId:data.settId, date:data.date},function(err,update) {
        if (err) 
            console.log(err);
        else
            
             res.send(update);
    })

  }
 
});


module.exports = router;
