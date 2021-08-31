var express = require('express');

var router = express.Router();
var users=require("../models/user.js");

router.get('/', function(req, res, next) {
    users.find({"role":"manager"},{_id:1,userName:1,firstName:1,lastName:1,phone:1},function(err,result) {
        if(err)
          res.send([])
        else
          res.send(result)




    })

})

module.exports = router;
