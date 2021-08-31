import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../dto/message';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.css']
})
export class MessageComponent implements OnInit {
@Input() message:Message;
userId=this.loginService.loggedInUser._id
my:boolean=false
him:boolean=false

  constructor(private loginService:LoginService) { }
  ngOnInit(): void {
    if(this.userId==this.message.sendId._id){
      this.my=true
    }
    else{
      this.him=true
    }
  }
  

}
