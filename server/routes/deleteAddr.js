var express = require('express');
var Mongoose  = require('mongoose');
var router = express.Router();
var addresses=require("../models/address.js");

router.get('/', function(req, res, next) {
    console.log("0")
var settId;
    addresses.findById(Mongoose.Types.ObjectId(req.query._id), function(err, result) {
        settId=result.settId;
        console.log("1")

        addresses.deleteOne({"_id": Mongoose.Types.ObjectId(req.query._id) }, function(err, result) {
                if(err){
                    console.log("2")
                    res.send([])
                }
                else{
                    addresses.find({"settId":settId}, function(err, result) {
                        if(err){
                            console.log("3")
                            res.send([])
                        }
                        else{
                            console.log("4")
                            res.send(result)
                        }
                    }) 
                }
        })



    })

})
module.exports = router;
