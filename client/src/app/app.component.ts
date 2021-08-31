import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Role } from './dto/user';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [MessageService]
})
export class AppComponent {
 roles = Role
  constructor(public login:LoginService,public router:Router) { 

    this.login.getMessage().subscribe(val=>{
        if(val){
          if(this.login.loggedInUser.role==Role.Manager){
           this.router.navigate(['/addressList'])
          }
          
         if(this.login.loggedInUser.role==Role.Divider){
              this.router.navigate(['/divPage'])
         }
        }
        else
        {
          this.router.navigate(['/'])
        }
    })

  }
  logout(){
    this.login.LogOut();

  }

  asdasda(){

  
  }
  
}
