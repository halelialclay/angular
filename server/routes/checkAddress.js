var express = require('express');
var Mongoose  = require('mongoose');
var router = express.Router();
var divByDate=require("../models/divByDate.js");

router.post('/', function(req, res, next) {
    var userId =req.body.userId;
    var addressesBit =req.body.addressesBit;
  //  console.log(req.body)
    var date =req.body.date;
  //  var date =req.body.date;
   // console.log(addressesBit)
    divByDate.findOneAndUpdate({"userId":userId,"date":date},{"addressesBit":addressesBit}, function(err, result) {

res.send(true)
    })

})



module.exports = router;
