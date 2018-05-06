import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, NavigationExtras, Route } from '@angular/router';
import { CanLoad, CanActivate, CanActivateChild } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
    constructor(private authService: AuthService, private router: Router) { }

    canLoad(route: Route) {
        console.log('AuthGuard#canLoad called');
        const url = `/${route.path}`;
        return this.checkLogin(url);
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('AuthGuard#canActivate called');
        const url: string = state.url;
        return this.checkLogin(url);
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log('AuthGuard#canActivateChild called');
        return this.canActivate(route, state);
    }

    checkLogin(url: string): boolean {
        if (this.authService.isLoggedIn) {
            return true;
        }
        this.authService.redirectUrl = url;
        const sessionId = '12345678';
        const navigationExtras: NavigationExtras = {
            queryParams: {
                session_id: sessionId
            },
            fragment: 'anchor'
        };

        this.router.navigate(['/login'], navigationExtras);
        return false;
    }
}
