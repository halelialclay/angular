var express = require('express');
var Mongoose  = require('mongoose');
var router = express.Router();
var addresses=require("../models/address.js");

router.get('/', function(req, res, next) {

addresses.find({settId:req.query.settId}, function(err, result) {
        if (err) {
          console.log(err);
        }
         else {
          console.log(result);
          if(result.length<0)     
        
            res.send([]);

          else
            res.send(result);
        }
      });

});


router.post('/', function(req, res, next) {
    var settId=req.body.settId;
    var address=req.body.address;
    var latitude=req.body.latitude;
    var longitude=req.body.longitude;

    addresses.insertMany({"settId":settId,"address":address, "latitude":latitude, "longitude":longitude}, function(err) {
        if (err) {
            console.log(err);
          } else {
            res.send(true)

          }
    })


});
module.exports = router;
