var express = require('express');
var Mongoose  = require('mongoose');
var router = express.Router();
var users=require("../models/user.js");

/* GET users listing. */
//todo: get user from DB
router.get('/', function(req, res, next) {

    var id=req.query.id;


    users.find({_id:Mongoose.Types.ObjectId(id) },{userName: 1, firstName: 1, lastName: 1, phone:1, role: 1 }, function(err, result) {
        if (err) {
          console.log(err);
        }
         else {
          
          if(result.length>0)     
            res.send(result[0]);
          else
            res.send({});
        }
      });

});


router.post('/', function(req, res, next) {

var id=req.body._id;
var data = req.body;
try{    
    users.find({_id:Mongoose.Types.ObjectId(id) }, function(err, results) {
        if (err) {
          res.send(false)
          console.log(err);
        } else {

      
         if(results.length>0)
         {
    
         users.updateOne({_id:Mongoose.Types.ObjectId(id)},{firstName:data.firstName,userName:data.userName,phone:data.phone}, function(err,result) {
          console.log("");
          if (err) 
              {res.send(false)
              console.log(err);}
          else
          { console.log(result);
               res.send(true);}
      })
      }


        }
      });
    }
    catch(e){
      console.log(e)
    }

});

module.exports = router;



