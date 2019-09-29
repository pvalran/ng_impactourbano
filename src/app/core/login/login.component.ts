import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;

    constructor(private router: Router) {

    }

    ngOnInit() {
    }

    login() {
        if (this.username === 'admin' && this.password === 'admin') {
            this.router.navigate(['dashboard']);
        } else {
            alert('Invalid credentials');
        }
    }
}
