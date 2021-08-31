var express = require('express');

var router = express.Router();
var message=require("../models/message.js");
var runNumber=require("../models/runNumber.js");

var Mongoose  = require('mongoose');


router.get('/', function(req, res, next) {
    data=req.query;
    myId=data.myId
    hisId=data.hisId
    
    
    let nStartTime ="2021-08-23T00:00:00.000+00:00";// Date.now();
  
      ids=[Mongoose.Types.ObjectId(myId),Mongoose.Types.ObjectId(hisId)]
      
    
try{
    message.find(  {'getId': { $in: ids},'sendId': { $in: ids},date:nStartTime},{runNumber:1,sendId:1,getId:1,publishDate:1,isN:1}) 

.populate('sendId',{firstName:1})
.populate('getId',{firstName:1})
 .exec(function(err, results){
     if(err)
     {
         res.send([])}
     else{
         try{
        message.updateMany({'sendId':hisId,'getId':myId},{isN:false},function(err,result){
            if(err)
            {console(err)}
            else{

            res.send(results.sort(function (a, b) {
                return a.runNumber - b.runNumber;
              }));}
        })
    }
    catch(e){console(e)}
       
      

     
     }
    
    })

}
catch(e){
    console.log(e)
  }

})
router.get('/Num/', function(req, res, next) {
    data=req.query;

    myId=data.myId
    
    console.log(myId)
    try{
    message.aggregate( [
        { $match: {getId:Mongoose.Types.ObjectId(myId) ,isN:true}},
        {"$group" : {_id:"$sendId", count:{$sum:1}}}
      ] ).exec(function(err, results){
          if(err)
            console.log(err)
          else{
            console.log(results)
            res.send(results);
          }
        
      })}
      catch(e){console.log(e);}
      
      
        


})

router.post('/', function(req, res, next) {
    message1=req.body;
    var nStartTime="2021-08-23T00:00:00.000+00:00";
    var num=0;
    runNumber.find({},function(err,result){
        if(err)
        console.log(err)
        else{
             num=result[0].num+1
            runNumber.updateMany({},{'num':num},function(err,result){
                if(err)
                console.log(err)
                else{
                   
                    message1.runNumber=num;
                    message1.date=nStartTime;
                   // message1.isN=true;
                    message.insertMany( message1, function(err,update) {
                        if (err) 
                            console.log(err);
                        else
                        {
                            message.find(  {'getId': { $in: ids},'sendId': { $in: ids},date:nStartTime},{runNumber:1,sendId:1,getId:1,publishDate:1,isN:1}) 

                            .populate('sendId',{firstName:1})
                            .populate('getId',{firstName:1})
                             .exec(function(err, results){
                                 if(err)
                                 {
                                     res.send([])
                                    }
                                 else{
                                    
                                        res.send(results.sort(function (a, b) {
                                            return a.runNumber - b.runNumber;
                                        }))
                                    }
                                    })
                                
                               
                                


                        }})
                    




                }
                })

        }

    })
})



module.exports = router;
