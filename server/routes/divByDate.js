var express = require('express');
var Mongoose  = require('mongoose');
var router = express.Router();
var divByDate=require("../models/divByDate.js");
const kmeans = require('node-kmeans');
const { listenerCount } = require('../models/divByDate.js');
var settAndDate=require("../models/settAndDate.js");

router.post('/', function(req, res, next) {
   console.log(req.body)
   try{
   var data=req.body;
   var addresses=data.addresses;
   var users=data.users;
   var date1=data.date.date;
   var settId=data.date.settId;
   let vectors = new Array();
  
   for (let i = 0 ; i < addresses.length ; i++) {
      vectors[i] = [addresses[i].latitude , addresses[i].longitude];
      
  }
  if(addresses.length>users.length){

   kmeans.clusterize(vectors,{k: users.length }, (err,result) => {
      if (err){
         console.log(err)
        
      }
      else {
      var DivByDatelist=[]         
      let allAddress=[];
         for (let i = 0 ; i < users.length ; i++) {
        
         let a=[];
         let vectorsBit=[]; 
         let addressName=[]
         
       
           for(let j = 0 ; j < result[i].clusterInd.length ; j++)
            {
               a.push(addresses[result[i].clusterInd[j]]._id)
               addressName.push(addresses[result[i].clusterInd[j]].address)
               vectorsBit[j]=0;
            }
            allAddress[i]={"firstName":users[i].firstName,"addressName":addressName}
            let userByAdd=
           {
           //"date":new Date("2021-08-11T21:00:00.000+00:00"),
           
           "date":date1,
           "settId":settId,
           "userId":users[i]._id,
           "addressesBit":vectorsBit,
           "addresses":a
           }
            DivByDatelist.push(userByAdd)
            console.log(allAddress)


         }
         let query={
            "date":date1
           }

         divByDate.deleteMany(query, function(err, result) {
           {
            
                  divByDate.insertMany(DivByDatelist, function(err, result) {
                     if (err)
                     {
                        res.send([]);
          
                     }
                     else
                     {
                        console.log("allAddress")
                        res.send(allAddress);
                     }


                  })

               }



         })
       
  

   }
})
}
else{
   res.send([])
}
   }


   catch(e){
      console.log(e)
   }
});
module.exports = router;
