import { Injectable } from '@angular/core';

import { Headers, Http } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
/*
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
*/

@Injectable()
export class AuthService {
  _isLoggedIn = false;
  _lastLogginChecked: Date = null;

  redirectUrl: string;
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(private cookieService: CookieService, private http: Http, private router: Router) { }

  setlogin(val: boolean) {
    this._isLoggedIn = val;
  }

  login(key: string): Observable<boolean> {
    let fullPath = `/editservices/login/${key}`;

    //let data = { user: userName, pass: password }
    return this.http.get(fullPath)
      .pipe(map(r => {
        this._isLoggedIn = (r.json().res == true);
        this._lastLogginChecked = new Date();
      }), catchError(this.handleError))
    //.catch(this.handleError);
  }

  getLoginKey() {
    let key = (<any>window).key;
    if (key == null || key == "") {
      key = this.cookieService.get("key");
      (<any>window).key = key;
    }
    return key;
  }

  isLoggedIn(): boolean {
    let diffMs: number = (this._lastLogginChecked == null) ? (Date.now().valueOf() - (new Date(2000, 0).valueOf())) : (Date.now().valueOf() - this._lastLogginChecked.valueOf());
    let diff: number = Math.round(diffMs / 60000);

    if (diff < 10)
      return this._isLoggedIn;
    else {
      let fullPath = `/editservices/login/${this.getLoginKey()}`;

      let request = new XMLHttpRequest();
      request.open('GET', fullPath, false);
      request.send(null);

      if (request.status === 200) {
        this._isLoggedIn = JSON.parse(request.responseText).res
        this._lastLogginChecked = new Date();
      }
      else
        this._isLoggedIn = false;

      return this._isLoggedIn;
    }
  }


  logout(): void {
    this._isLoggedIn = false;
    (<any>window).key = "";
    let fullPath = `/editservices/login/0`;
    this.http.get(fullPath)
      .toPromise()
      .then(
        r => {
          this.router.navigate(["/"]);
        })
      .catch(() => {
        this.router.navigate(["/"]);
      });

    /*
        .pipe(map(r => {
            this.router.navigate(["/"]);
    }))
    */
  }

  handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
