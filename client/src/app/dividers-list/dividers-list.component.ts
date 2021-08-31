import { SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { Address } from '../dto/address';
import { Message } from '../dto/message';
import { User } from '../dto/user';
import { DividerService } from '../services/divider.service';
import { LoginService } from '../services/login.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-dividers-list',
  templateUrl: './dividers-list.component.html',
  styleUrls: ['./dividers-list.scss']

})
export class DividersListComponent implements OnInit {
  users: User[]
  userId:string;
  user:User;
  display:boolean=false;
  displayChat:boolean=false;

  displayMapDialog:boolean=false;
  selectedDate:string=this.getToday();
  address:Address[];
  addressBit:number[];
  centerlat:number=30;
  centerlong:number=30;
  selectedCity:Address;
  curUser:User;
  Zoom:number=13;
  massages:Message[]
  text2:string;
  z:number=2
  pooling:any;

  //countMessage:{[key:string]:number}[];
  countMessage:any=[];
  constructor(private dividersService:DividerService,private messageService:MessageService,private loginService:LoginService) { }
  

  ngOnInit(): void {
   
      this.dividersService.getDividersList()
        .subscribe(d=>{
         
          this.users=d
          this.pulling1()
          
        })
  }

  closeUpdate() {
    this.dividersService.getDividersList()
        .subscribe(d=>{
          this.users=d
        })
    

  }
  
  pooling1:any
  pulling1(){
    this.pooling1 = setInterval(() => {
      this.messageService.getNumMessages(this.loginService.loggedInUser._id)
      .subscribe(d=>this.countMessage=d.reduce((a,b)=>(a[b._id]=b.count,a),{}))
      
      //.pipe(map(data=>data.map(c=>{c._id,c.count})),tap(v=>this.countMessage=v)).subscribe()
  
    },4*1000)
  }

 

  openUpdate(userId){
    
    this.userId = userId;
    this.display=true;
    
  }
  clouse(){
    this.Zoom=13;
    this.address=[];
  }

  openMap(_id){
    this.userId=_id;
    this.displayMapDialog=true;    
  }
  dateSelected(){
     
  }

  loadDivider(){
        
      
  }
  x:number=0;
  y:number=0;
  showd(){
    this.dividersService.getAddressForDiv(this.userId,this.selectedDate)
    .subscribe(d=>{this.address=d.addresses
      this.addressBit=d.addressesBit
      
      this.x=0;
      this.y=0;
      if(this.address.length>0){
        for (var i = 0; i < this.address.length; i++){
         
        if(d.addressesBit[i]==0){
          this.x=this.x+this.address[i].latitude
          this.y=this.y+this.address[i].longitude};
        

}
        this.centerlat=this.x/this.address.length;
        this.centerlong=this.y/this.address.length;
    }

    }

      
      )

  }
  getToday(){
    let d = new Date()
    return `${d.getFullYear()}-${this.getDateParam(d.getMonth()+1)}-${this.getDateParam(d.getDate())}`;
  }
  getDateParam(n:number):string{
    return (n<10)?'0' + n: n.toString();
  }
 

  openchat(user:User){
    this.user = user;
    this.displayChat=true;
    this.messageService.getMessages(this.loginService.loggedInUser._id,this.user._id).subscribe(m=>{this.massages=m
      this.pulling()})

  }
  clouseMessage(){
    clearInterval(this.pooling);

  }
  sendMessage(){
    
    let sendMessage:Message={
      "_id":null,
      
      "sendId":{"_id":this.loginService.loggedInUser._id,"firstName":this.loginService.loggedInUser.firstName},
      "getId":{"_id": this.user._id,"firstName":this.user.firstName},
      "publishDate":this.text2,
      runNamber: null,
      isN:true

    }
    this.text2=""
    this.messageService.sendMessage(sendMessage).subscribe(m=>this.massages=m)

  }

  pulling(){
    this.pooling = setInterval(() => {
      this.messageService.getMessages(this.loginService.loggedInUser._id,this.user._id).subscribe(m=>this.massages=m);
  
    },10*1000)
  }
  





  
  cangeAddr(){
    this.centerlat=this.selectedCity.latitude;
    this.centerlong=this.selectedCity.longitude;
    this.Zoom=25;
  }



}
