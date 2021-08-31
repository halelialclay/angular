var express = require('express');
var router = express.Router();

var sett=require("../models/settInIsrael.js");
var settAndDate=require("../models/settAndDate.js");


router.get('/', function(req, res, next) {

  sett.find({},{ name:1 }, function(err, result) {
        if (err) {
          console.log(err);
        } else {
        
          res.send( result );
        }
      });


});




router.post('/', function(req, res, next) {
  var data = req.body;
  var saveDate=new settAndDate;
  //saveDate.

});


module.exports = router;
