import {Component, Inject, OnInit} from '@angular/core';
import {  User } from '../../../interfaces/user';
import {IObjRequest} from "../../../interfaces/iobj-request";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import { DOCUMENT } from '@angular/common';
import { ConfirmDialogService } from "../../../services/confirm-dialog.service";
import {environment} from "../../../../environments/environment";
import {AuthService} from "../../../services/auth.service";
import {AuthUser} from "../../../interfaces/auth";

@Component({
    selector: 'app-edition',
    templateUrl: './edition.component.html',
    styleUrls: ['./edition.component.scss']
})
export class EditionComponent implements OnInit {
    loading = true;
    userId: any;
    userVisible: boolean;
    passwordVisible: boolean;
    userCurrent: any;
    selected = 3;
    ObjUser: User ={
        idUser: '',
        name: '',
        paternalLastName: '',
        motherLastName: '',
        email: '',
        confirme_email:"",
        password:"",
        confirme_password:"",
        profileId: 4,
        status_flag:1,
        phone: "",
        sucursal: ""
    };

    options = {
        title: 'ATENCION',
        message: '',
        cancelText: null,
        confirmText: 'CERRAR'
    };

    constructor(
        private router: Router,
        private httpClient: HttpClient,
        private sanitizer: DomSanitizer,
        private dialogRef: MatDialogRef<EditionComponent>,
        private dialogService: ConfirmDialogService,
        private authUser: AuthService,
        @Inject(MAT_DIALOG_DATA) data:any,
        @Inject(DOCUMENT) private document: Document
    ) {
        this.userId = data.model.dataModal;
        if (this.userId > 0) {
            this.userVisible = false;
        } else {
            this.userVisible = true;
        }
        this.passwordVisible = data.model.dataPassword;
        this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser())) ;
    }

    ngOnInit() {
        this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser()));
        if ((this.userId > 0) || (this.userId != null)) {
            this.httpClient.get<IObjRequest>(environment.apiUrl+'/forms/userboard/'+this.userId).subscribe(
                (response) => {
                    if(response.result){
                        if (response.data != null) {
                            this.ObjUser = response.data;
                            this.ObjUser.confirme_email = this.ObjUser.email;
                        }
                    } else {

                    }
                },
                (error) => {

                }
            );
        }
    }

    registar(){
        const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const passwordExp = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/;

        if (this.ObjUser.email == '' || this.ObjUser.confirme_email == '' ||
            this.ObjUser.email == null || this.ObjUser.confirme_email == null
        ) {
            this.options.message = "Su correo electrónico y/o su confirmación no puede ser vacio";
            this.dialogService.open(this.options);
            return false;
        }

        if (!regularExpression.test(String(this.ObjUser.email).toLowerCase()) ||
            !regularExpression.test(String(this.ObjUser.confirme_email).toLowerCase())
        ) {
            this.options.message = "Su correo electrónico y/o su confirmación no es un formato de correo electrónico";
            this.dialogService.open(this.options);
            return false;
        }

        if (this.ObjUser.email != this.ObjUser.confirme_email) {
            this.options.message = "Su correo electrónico y su confirmación no son iguales";
            this.dialogService.open(this.options);
            return false;
        }

        if (this.ObjUser.paternalLastName == '' || this.ObjUser.password == null) {
            this.options.message = "El apellido paterno no puede ser vacio o nulo";
            this.dialogService.open(this.options);
            return false;
        }
        if (this.ObjUser.name == '' || this.ObjUser.name == null) {
            this.options.message = "El nombre no puede ser vacio o nulo";
            this.dialogService.open(this.options);
            return false;
        }

        let ObjUser = {
            name: this.ObjUser.name,
            paternalLastName: this.ObjUser.paternalLastName,
            motherLastName: this.ObjUser.motherLastName,
            profileId: 4,
            password: "",
            email: this.ObjUser.email,
            phone: this.ObjUser.phone,
            sucursal: "",
            typeUser:1,
            crtd_by: this.userCurrent.email
        };
        this.loading = false;
        this.httpClient.post<IObjRequest>(environment.apiUrl+'/forms/userboard/app',ObjUser).subscribe(
            (response) => {
                if(response.result){
                    this.loading = true;
                    this.document.location.reload();
                } else {
                    this.options.message = response.message;
                    this.dialogService.open(this.options);
                    this.loading = true;
                    //this.router.navigate(['administration/list']);
                }
            },
            (error) => {
                this.options.message = "Error en el registro del usuario";
                this.dialogService.open(this.options);
                this.loading = true;
                //this.router.navigate(['administration/list']);
            }
        );
    }

    update(){
        if (this.ObjUser.paternalLastName == '' || this.ObjUser.password == null) {
            this.options.message = "El apellido paterno no puede ser vacio o nulo";
            this.dialogService.open(this.options);
            return false;
        }
        if (this.ObjUser.name == '' || this.ObjUser.name == null) {
            this.options.message = "El nombre no puede ser vacio o nulo";
            this.dialogService.open(this.options);
            return false;
        }
        let ObjUser = {
            name: this.ObjUser.name,
            paternalLastName: this.ObjUser.paternalLastName,
            motherLastName: this.ObjUser.motherLastName,
            profileId: 4,
            status_flag:(this.ObjUser.status_flag)? 1 : 0,
            typeUser:1,
            phone: this.ObjUser.phone
        };
        this.loading = false;
        this.httpClient.put<IObjRequest>(environment.apiUrl+'/forms/userboard/'+this.userId,ObjUser).subscribe(
            (response) => {
                if(response.result){
                    this.document.location.reload();
                    this.loading = true;
                } else {
                    this.options.message = response.message;
                    this.dialogService.open(this.options);
                    this.loading = true;
                }
            },
            (error) => {
                this.options.message = "Error en el registro del usuario";
                this.dialogService.open(this.options);
                this.loading = true;
            }
        );
    }

    changePassword(){
        const passwordExp = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/;
        if (this.ObjUser.password != this.ObjUser.confirme_password) {
            this.options.message = "Su contraseña y su confirmación no son iguales";
            this.dialogService.open(this.options);
            return false;
        }
        if (!passwordExp.test(this.ObjUser.password)) {
            this.options.message = "Su contreseña debe tener por lo menos una mayuscula, un número y 8 caracteres con minimo";
            this.dialogService.open(this.options);
            return false;
        }
        let ObjUser = {
            password: this.ObjUser.password
        };
        this.loading = false;
        this.httpClient.put<IObjRequest>(environment.apiUrl+'/forms/userboard/'+this.userId,ObjUser).subscribe(
            (response) => {
                if(response.result){
                    this.loading = false;
                    this.document.location.reload();
                } else {
                    this.options.message = response.message;
                    this.dialogService.open(this.options);
                    this.loading = true;
                }
            },
            (error) => {
                this.options.message = "Error en el cambio de contraseña";
                this.dialogService.open(this.options);
                this.loading = true;
            }
        );
    }

    sendEmail(){
        let ObjUser = {
            username:'',
            password:'',
            email:this.ObjUser.email,
        };
        this.loading = false;
        this.httpClient.post<IObjRequest>(environment.apiUrl+'/user/user/restorepassword',ObjUser).subscribe(
            (response) => {
                if(response.result){
                    this.loading = true;
                    this.options.message = "Se ha enviado un correo electrónico con su nueva contraseña";
                    this.dialogService.open(this.options);

                } else {
                    this.loading = true;
                    this.options.message = response.message;
                    this.dialogService.open(this.options);

                }
            },
            (error) => {
                this.loading = true;
                this.options.message = "Error en el registro del usuario";
                this.dialogService.open(this.options);

            }
        );
    }
}
