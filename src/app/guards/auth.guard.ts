import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { AppUser } from '../models/appuser';
import { SnackbarService } from 'app/services/snackbar.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router , private authService: AuthService , private snackService: SnackbarService ){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.appUser$.pipe(map((user: AppUser) => {
        if (user && user.isAdmin) {
        return true;
        }
        this.snackService.showSnackBar('Not Authorized to view this Page');
        this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
        
        }));
      }
  
}
