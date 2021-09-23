import {Injectable, Injector} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {from, Observable, of} from 'rxjs';
import {concatMap, first} from "rxjs/operators";
import {AuthService} from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})
export class SyncGuard implements CanActivate {
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
        if ((userCurrent.profileId == "1") || (userCurrent.profileId == "2") || (userCurrent.profileId == "3")) {
            return true;
        } else {
            return false;
        }
    }
}

