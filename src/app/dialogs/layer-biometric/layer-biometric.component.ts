import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IObjRequest} from "../../interfaces/iobj-request";
import {image} from "../../core/image";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-layer-biometric',
    templateUrl: './layer-biometric.component.html',
    styleUrls: ['./layer-biometric.component.scss']
})
export class LayerBiometricComponent implements OnInit {
    creditId:any;
    imageSource: any;
    ObjData: any;
    biometric = {
        estatus: "",
        mensaje: "",
        similitud: ""
    }
    constructor(
        private httpClient: HttpClient,
        private sanitizer: DomSanitizer,
        private dialogRef: MatDialogRef<LayerBiometricComponent>,
        @Inject(MAT_DIALOG_DATA) data:any) {
        this.creditId = data.model.dataModal;
    }

    ngOnInit() {
        this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${image}`);

        this.httpClient.get<IObjRequest>(environment.apiUrl+"/forms/download/"+this.creditId+"/3").subscribe(
            (result) => {
                if(result.data != null){
                    this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${result.data}`);
                }
            },
            (error) => {
                console.log(<any>error);
            }
        );

        this.httpClient.get<IObjRequest>(environment.apiUrl+"/forms/transaction/"+this.creditId+"/2").subscribe(
            (result) => {
                if (result.data != null) {
                    this.biometric.estatus = (result.data.estatus == 'OK')? 'SI': 'NO';
                    if (result.data.estatus == 'OK') {
                        this.biometric.mensaje = result.data.mensaje;
                        this.biometric.similitud = result.data.similitud.toFixed(2);
                    } else {
                        this.biometric.mensaje = result.data.mensaje;
                        this.biometric.similitud = "<80";
                    }
                } else {
                    this.biometric.estatus = "No se identifico el documento";
                    this.biometric.mensaje = "No se identifico el documento";
                    this.biometric.similitud = "No se identifico el documento";
                }
            },
            (error) => {
                this.biometric.estatus = "No se identifico el documento";
                this.biometric.mensaje = "No se identifico el documento";
                this.biometric.similitud = "No se identifico el documento";
            }
        );



    }

}
