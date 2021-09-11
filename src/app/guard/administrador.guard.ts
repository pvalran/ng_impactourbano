import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class AdministradorGuard implements CanActivate {
    constructor(private router:Router,
                private authUser: AuthService) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this.authUser.getCurrentUser() == null){
            this.router.navigate(["/"]);
        }
        let userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser())) ;
        if (userCurrent.profileId == "1") {
            return true;
        } else {
            return false;
        }
    }
}
