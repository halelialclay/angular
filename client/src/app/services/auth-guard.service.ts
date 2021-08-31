import { Injectable } from '@angular/core';
import { Router , CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';



@Injectable()
export class AuthGuardService implements CanActivate {
  

  constructor(private loggin :LoginService,private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let role=route.data.role;
    
    if(this.loggin.isLoggedIn &&this.loggin.loggedInUser.role==role)
    return true;
    else {
      this.router.navigate(['/'])
      return false;
    }
  }
}
