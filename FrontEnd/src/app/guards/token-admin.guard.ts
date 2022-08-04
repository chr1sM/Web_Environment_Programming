import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenAdminGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (localStorage.getItem('cPerson')) {
      let token = JSON.parse(localStorage.getItem('cPerson'))
      if (token.permission == 1) {
        return true;
      }
    }


    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });

    return false;
  }

}
