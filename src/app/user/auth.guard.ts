import { Injectable } from '@angular/core';
import {
    CanActivate,
    CanActivateChild,
    Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { UserService } from './user.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
    constructor(private userService: UserService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        const url: string = state.url;

        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    checkLogin(url: string): boolean {
        if (this.userService.isLogin) { return true; }

        // store the attepted URL for redirecting
        // this.Service.redirectUrl = url;

        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    }
}
