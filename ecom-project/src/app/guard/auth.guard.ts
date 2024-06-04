import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SellerService } from '../services/seller.service';

@Injectable({
  providedIn: 'root'
})
export class authGuard implements CanActivate {
  constructor(private sellerService: SellerService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise <boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = this.sellerService.isSellerLoggedIn;
    
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false; 
    }
  }
}
