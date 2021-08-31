import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: []
})
export class LoginComponent implements OnInit {
  @Output() loggedin = new EventEmitter();
  
  username: string;//="haleli.alc@gmail.com";
  password: string;//="1";

  constructor(private login:LoginService) { }

  ngOnInit(): void {

  }

  Loggin(){
    this.login.Login(this.username, this.password)
  }
}
