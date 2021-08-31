import { Component, OnInit } from '@angular/core';
import { Address } from '../dto/address';
import { DividerService } from '../services/divider.service';
import { LoginService } from '../services/login.service';
import {
  MarkerTypeId, IMapOptions, IMarkerEvent, ILatLong, MapTypeId, Marker, MapComponent, BingMarker, MapMarkerDirective, IMarkerIconInfo
} from 'angular-maps';
import { User } from '../dto/user';
import { MessageService } from '../services/message.service';
import { Message } from '../dto/message';

@Component({
  selector: 'app-div-page',
  templateUrl: './div-page.component.html',
  styleUrls: ['./div-page.scss']
})
export class DivPageComponent implements OnInit {
  userId:string;
  selectedDate:any=this.getToday();
  selectedCity: Address;
;
  addresses:Address[];
  addressNotDiv:Address[];
  checkAdd:Address[];
  displayMapDialog:boolean=true;
  centerlat:number=30;
  centerlong:number=30;
  Zoom:number=13;
  addressesBit:number[];
  visible:boolean=false;
  management:User[];
  b:boolean=false;
  position:any;
  displayPosition:boolean=false;
  selectedM:User;
  chatMessages: Message[];
  text2:string;
  countMessage:any=[];

  constructor(private dividersService:DividerService,private loginService :LoginService,private messageService :MessageService) { }

  ngOnInit(): void {
    this.userId=this.loginService.loggedInUser._id;

    this.getListAddress()
   alert(this.addresses.length)
   
    
   
   


  }
  getToday(){
    let d = new Date()
    return `${d.getFullYear()}-${this.getDateParam(d.getMonth()+1)}-${this.getDateParam(d.getDate())}T00:00:00.000+00:00`;
  }

  getDateParam(n:number):string{
    return (n<10)?'0' + n: n.toString();
  }

   x:number=0;
   y:number=0;
  showd(){
      this.x=0;
      this.y=0;
      if(this.addresses.length>0){
      for (var i = 0; i < this.addresses.length; i++){
      

          this.x=this.x+this.addresses[i].latitude
          this.y=this.y+this.addresses[i].longitude
      
        
    
    }
  
        this.centerlat=this.x/this.addresses.length;
        this.centerlong=this.y/this.addresses.length;
  }
  
  }

check(){
 
  for (var i = 0; i < this.addresses.length; i++){
    for (var j = 0; j < this.checkAdd.length; j++){
     
    if( this.addresses[i]==this.checkAdd[j]){

      this.addressesBit[i]=1;
      
    }
   
    
    }

  }


  this.dividersService.checkAddress(this.addressesBit,this.loginService.loggedInUser._id,this.selectedDate)


}
  
cangeAddr(){
  alert( this.selectedCity.latitude)
  alert(this.selectedCity.longitude)
  this.centerlat=this.selectedCity.latitude;
  this.centerlong=this.selectedCity.longitude;
  this.Zoom=25;
}
change(){
      this.addressNotDiv=[]
      let j=0;
    
      for (var i = 0; i < this.addresses.length; i++){
        if( this.addressesBit[i]==0)
        {
          this.addressNotDiv[j]=this.addresses[i]
          j=j+1
        }
      }
    
      
    }
    pooling1:any

  pulling1(){
    this.pooling1 = setInterval(() => {
      this.messageService.getNumMessages(this.loginService.loggedInUser._id)
      .subscribe(d=>this.countMessage=d.reduce((a,b)=>(a[b._id]=b.count,a),{}))
    },4*1000)
  
  }
    
    openM(){
      this.dividersService.getAllManagement().subscribe(m=>{
     
        this.management=m
        this.b=true;
      
        
      })
      this.pulling()
     

    }
    
   
    selectUserForChat(user:User){
      
      this.selectedM = user;
      this.messageService.getMessages(this.loginService.loggedInUser._id,user._id).subscribe(m=>{this.chatMessages=m})
    }

    ngAfterViewInit(){
      this.change()

    }
    sendMessage(){
 
      let sendMessage:Message={
        "_id":null,
        
        "sendId":{"_id":this.loginService.loggedInUser._id,"firstName":this.loginService.loggedInUser.firstName},
        "getId":{"_id":this.selectedM._id,"firstName":this.selectedM.firstName},
        "publishDate":this.text2,
        runNamber: null,
        isN:true

      }
      this.text2=""
      this.messageService.sendMessage(sendMessage).subscribe(m=>{this.chatMessages=m})

    }
close(){

  clearInterval(this.pooling);
}
    pooling:any;
    pulling(){
      this.pooling = setInterval(() => {
        this.messageService.getMessages(this.loginService.loggedInUser._id,this.selectedM._id).subscribe(m=>this.chatMessages=m);
    
      },10*1000)
    }


getListAddress(){
    this.dividersService.getAddressForDiv(this.userId,this.selectedDate)
    .subscribe(d=>{this.addresses=d.addresses
   
      this.addressesBit=d.addressesBit
      this.change()
      this.showd()
    this.pulling1()

    })

  }
}

