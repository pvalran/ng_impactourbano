import { Component, EventEmitter, Output,OnInit } from '@angular/core';

import * as screenfull from 'screenfull';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls:['./header.component.scss']
})
export class HeaderComponent {
    profile = ["Administrador","Comercial","Mesa de control"];
    @Output()
    toggleSidenav = new EventEmitter<void>();
    @Output()
    toggleNotificationSidenav = new EventEmitter<void>();

    constructor(private authService:AuthService,
                private router:Router
    ) {}

    ngOnInit(){
        this.toggleSidenav.emit();
    }


    fullScreenToggle(): void {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    }

    logout(){
        this.authService.logoutUser();
        this.router.navigate(["/"]);
    }

    passwordchange(){
        this.router.navigate(["passwordchange"]);
    }
}
