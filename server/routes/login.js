var express = require('express');
var router = express.Router();
var users=require("../models/user.js");

/* GET users listing. */
router.post('/', function(req, res) {
  var data = req.body;
  
  if(data.username==null){
    req.session.user;
    console.log("data")
    res.send(true)
  }
  else
  {
    console.log("data1")

    var username = data.username;
    var password = data.password;
  
    users.find({password:password, userName:username}, { _id:1, userName: 1, firstName: 1, lastName: 1, phone:1, role: 1 } ,function(err, result) {
      if (err) {
        console.log(err);
      

      } else {
          var sess = req.session;
          sess.user = result[0];
          res.send(result[0])
      }
    });
  }
});

module.exports = router;

