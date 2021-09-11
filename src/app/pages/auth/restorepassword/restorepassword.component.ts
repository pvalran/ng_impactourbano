import { Component, OnInit } from '@angular/core';
import {User} from "../../../interfaces/user";
import {IObjRequest} from "../../../interfaces/iobj-request";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {ConfirmDialogService} from "../../../services/confirm-dialog.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-restorepassword',
    templateUrl: './restorepassword.component.html',
    styleUrls: ['./restorepassword.component.scss']
})
export class RestorepasswordComponent implements OnInit {

    user = {
        email:''
    }
    options = {
        title: 'ATENCION',
        message: '',
        cancelText: null,
        confirmText: 'CERRAR'
    };

    constructor(private httpClient:HttpClient,
                private dialogConfirm:ConfirmDialogService,
                private router:Router) { }

    ngOnInit() {
    }

    sendEmail(){
        let ObjUser = {
            username:'',
            password:'',
            email:this.user.email,
        };

        this.httpClient.post<IObjRequest>(environment.apiUrl+'/user/user/restorepassword',ObjUser).subscribe(
            (response) => {
                if(response.result){

                    this.options.message = "Se ha enviado un correo electrónico con su nueva contraseña";
                    this.dialogConfirm.open(this.options);
                    this.dialogConfirm.confirmed().subscribe(confirmed => {
                        if (confirmed) {
                            this.router.navigate(['/']);
                        }
                    });
                } else {
                    this.options.message = response.message;
                    this.dialogConfirm.open(this.options);

                }
            },
            (error) => {
                this.options.message = "Error en el registro del usuario";
                this.dialogConfirm.open(this.options);

            }
        );
    }

    home(){
        this.router.navigate(['/']);
    }
}
