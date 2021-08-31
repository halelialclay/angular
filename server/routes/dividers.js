var express = require('express');
var router = express.Router();
var users=require("../models/user.js");

/* GET users listing. */
//todo: get user from DB
router.get('/', function(req, res, next) {


    users.find({ role: "divider" }, { _id:1, userName: 1, firstName: 1, lastName: 1, phone:1, role: 1 }, function(err, result) {
        if (err) {
          console.log(err);
        } else {
         
          res.send( result );
        }
      });


});

module.exports = router;



