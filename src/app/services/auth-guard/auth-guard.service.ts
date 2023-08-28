import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { 
    // localStorage.removeItem('token')
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const tokenObj = localStorage.getItem('token')
    if(tokenObj) {
      let time = new Date(10*60*60*1000).getTime();
      let now = new Date().getTime();
      let token = JSON.parse(tokenObj);
      let diff = now - token.time;
      if(diff > time) {
        localStorage.removeItem('tiken')
        return this.router.parseUrl('/login');
      }
      return true;

    }

    return this.router.parseUrl('/login');
  }
}
