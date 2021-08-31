var express = require('express');
var router = express.Router();
var addresses=require("../models/address.js");
var divByDate=require("../models/divByDate.js");
var Mongoose  = require('mongoose');

router.post('/', function(req, res, next) {


   ///toChange
   console.log("1")
   var date =req.body.selectedDate;
   var userId =req.body.userId;
   console.log("2")
  

   
  
  divByDate.find({ "userId": userId, "date":date}, {addresses:1,addressesBit:1}, function(err, result) {
      
            if(err){
                res.send({"addresses":[],"addressesBit":[]}) 
            }
         
           else{
          
            let newAddress=[];
          if(result.length==0){
         
            res.send({"addresses":[],"addressesBit":[]})
            }

          else{
              for(let j in result[0].addresses){
                       
                       
                        newAddress.push({"_id":Mongoose.Types.ObjectId(result[0].addresses[j])})
                      }
                        
                        addresses.find({$or:newAddress},function(err, result1) {
                        
                           res.send({"addresses":result1,"addressesBit":result[0].addressesBit})
                          
                       
                        })
                       
                     
              
                    }

            }

        })
    })

        module.exports = router;