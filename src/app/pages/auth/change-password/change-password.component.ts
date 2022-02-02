import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ConfirmDialogService} from "../../../services/confirm-dialog.service";
import {Router} from "@angular/router";
import {IObjRequest} from "../../../interfaces/iobj-request";
import {environment} from "../../../../environments/environment";
import {AuthService} from "../../../services/auth.service";

@Component({
    selector: 'app-change-password',
    templateUrl: './change-password.component.html',
    styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
    loading = true;
    password: "";
    confirme_password:"";
    userId: any;
    userCurrent:any;
    user = {
        email: ''
    }
    options = {
        title: 'ATENCION',
        message: '',
        cancelText: null,
        confirmText: 'CERRAR'
    };

    constructor(private httpClient: HttpClient,
                private dialogConfirm: ConfirmDialogService,
                private authUser:AuthService,
                private router: Router) {
        this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser())) ;
    }

    ngOnInit() {
        this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser())) ;
    }

    home() {
        this.router.navigate(['/']);
    }

    changePassword(){
        const passwordExp = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/;
        if (this.password != this.confirme_password) {
            this.options.message = "Su contraseña y su confirmación no son iguales";
            this.dialogConfirm.open(this.options);
            return false;
        }
        if (!passwordExp.test(this.password)) {
            this.options.message = "Su contreseña debe tener por lo menos una mayuscula, un número y 8 caracteres con minimo";
            this.dialogConfirm.open(this.options);
            return false;
        }
        let ObjUser = {
            password: this.password
        };
        this.loading = false;
        this.httpClient.put<IObjRequest>(environment.apiUrl+'/forms/employee/'+this.userCurrent.idUser,ObjUser).subscribe(
            (response) => {
                if(response.result){
                    this.options.message = "Su contraseña ha sido actualizada, ingrese nuevamente";
                    this.dialogConfirm.open(this.options);
                    this.dialogConfirm.confirmed().subscribe((data) => {
                        this.loading = true;
                        this.router.navigate(['/']);
                    });
                } else {
                    this.options.message = response.message;
                    this.dialogConfirm.open(this.options);
                    this.loading = true;
                }
            },
            (error) => {
                this.options.message = "Error en el cambio de contraseña";
                this.dialogConfirm.open(this.options);
                this.loading = true;
            }
        );
    }
}
