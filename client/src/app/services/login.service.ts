import { Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../dto/user';
import { Observable, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public loggedInUser: User;
  public isLoggedIn:boolean=false;
  private loggedInSubject = new Subject<boolean>();

  constructor(private http: HttpClient) { }
 
  Login(username:string, password:string){
    let data = {username:username, password:password};

    return this.http.post("/api/login", data)
      .subscribe(user=>{
        this.loggedInUser = <User>user
        this.isLoggedIn=true;
        this.loggedInSubject.next(true);
      });
  }

  LogOut(){
    return this.http.post("/api/login","").subscribe(x=>this.LoggedOut())
  }

  LoggedOut(){
    this.loggedInUser=null;
    this.isLoggedIn=false;
    this.loggedInSubject.next(false);

  }

  getMessage(): Observable<boolean> {
    return this.loggedInSubject.asObservable();
}

}

