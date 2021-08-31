var express = require('express');
var Mongoose  = require('mongoose');
const { findById } = require('../models/post.js');
var router = express.Router();
var blog=require("../models/post.js");
router.get('/', function(req, res, next) {
 var _id=req.query._id
   blog.findById(_id,{}, function(err, result) {
       if(err)
       res.send(err)
       else
       res.send(result)
   })
 
    })
router.get('/all/', function(req, res, next) {

        blog.find({},{},function(err, result) {
            console.log(result)
        res.send(result);
    })
})

router.get('/allViewPost/', function(req, res, next) {
    
    blog.find({published:true},{},function(err, result) {
        console.log(result)
    res.send(result);
})

   
})


router.put('/', function(req, res, next) {
var _id=req.query._id;
blog.findOneAndUpdate({"_id":_id},req.body,function(err, result) {
    if(err)
      res.send(err)
    else
      res.send(true) 
    
})

})

router.post('/', function(req, res, next) {
    var title=req.body.title;
    console.log(req.body)
    var date =req.body.date;
    var userId=req.body.userId
    var useName=req.body.userName

    var newPost={
        "title":title,
        "content":"",
        "writer":useName,
        "published":false,
        "publishDate":date,
        "userId":userId

    }

    blog.insertMany(newPost, function(err, result) {
        if(err)
         res.send(false)
        else
         res.send(true)

    })

});

module.exports = router;
