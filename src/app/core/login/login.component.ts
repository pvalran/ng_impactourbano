import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;

    constructor(private router: Router,private authService:AuthService) {

    }

    ngOnInit() {

    }

    login() {
        /**
         *  return this.authService.loginuser(this.user.username,this.user.password)
         *  .subscribe(
         *      data  => console.log(data),
         *      error => console.log(error)
         *   )
         *
         * */

        if (this.username === 'admin' && this.password === 'admin') {
            this.router.navigate(['dashboard']);
        } else {
            alert('Invalid credentials');
        }
    }
}
