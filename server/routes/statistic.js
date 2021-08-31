var express = require('express');
var router = express.Router();
var divByDate=require("../models/divByDate.js");
var users=require("../models/user.js");
var statistic=require("../models/statistic.js");
var settInIsrael=require("../models/settInIsrael.js");


router.get('/', function(req, res, next) {

  divByDate.find({
    
  })
  .populate('settId',{name:1})
 .populate('userId',{firstName:1})
 .exec(function(err, results){
  if (err) {
    console.log(err);
  }
   else {
  console.log(results);
    res.send(results);
   }
     
 })


})



module.exports = router;
