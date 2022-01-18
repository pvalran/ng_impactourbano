import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatDialog } from "@angular/material";
import { AuthService } from "../../services/auth.service";
import {ConfirmDialogService} from "../../services/confirm-dialog.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    username: string;
    password: string;
    loading = true;
    options = {
        title: 'ATENCION',
        message: '',
        cancelText: null,
        confirmText: 'CERRAR'
    };

    constructor(private router: Router,
                private authService:AuthService,
                private dialogService: ConfirmDialogService,) {

    }

    ngOnInit() {

    }

    login() {



        if (this.username == '' || this.username == null) {
            this.options.message = "El usuario no puede ser vacio";
            this.dialogService.open(this.options);
            return false;
        }

        if (this.password == '' || this.password == null) {
            this.options.message = "Su contraseña  no puede ser vacio";
            this.dialogService.open(this.options);
            return false;
        }

        this.loading = false;
        this.authService.loginUser(this.username,this.password)
        .subscribe(
            data  => {
                if (data.result == true ) {
                    this.authService.UserAuth.idUser = data.data.idUser;
                    this.authService.UserAuth.name = data.data.name;
                    this.authService.UserAuth.paternalLastName = data.data.paternalLastName;
                    this.authService.UserAuth.motherLastName = data.data.motherLastName;
                    this.authService.UserAuth.email = data.data.email;
                    this.authService.UserAuth.profileId = data.data.profileId;
                    this.authService.setUser(data.data);
                    if (data.message == 'ChangePassword'){
                        this.router.navigate(['passwordchange']);
                    } else {

                        this.loading = true;
                        this.router.navigate(['dashboard']);
                    }

                } else {
                    this.loading = true;
                    this.options.message = "Error en la autentificacion";
                    this.dialogService.open(this.options);
                }
            },
            error => {
                this.loading = true;
                this.options.message = "Error en la aplicación";
                this.dialogService.open(this.options);
            }
        )
    }

    restorechange(){
        this.loading = true;
        this.router.navigate(['restorechange']);
    }
}
