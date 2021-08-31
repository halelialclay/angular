import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { LoginService } from './login.service';

@Injectable()
export class LoggedInterceptorService implements HttpInterceptor {

  constructor(private login: LoginService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      filter(event => event instanceof HttpResponse),
      map((event:HttpEvent<any>)=>{
        
        if((<HttpResponse<any>>event).body.loggedin!=null && (<HttpResponse<any>>event).body.loggedin==false){
          this.login.LoggedOut(); 
        }
        return event;
      })

    )
  }
}
