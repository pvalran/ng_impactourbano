import {Component, Inject, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {IObjRequest} from "../../interfaces/iobj-request";
import {image} from "../../core/image";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-layer-document',
    templateUrl: './layer-document.component.html',
    styleUrls: ['./layer-document.component.scss']
})
export class LayerDocumentComponent implements OnInit {
    creditId:any;
    imageAnverso: any;
    imageReverso: any;
    ObjData: any;
    ine = {
        mrz: "",
        valido: "",
        vigencia: ""
    }
    constructor(
        private httpClient: HttpClient,
        private sanitizer: DomSanitizer,
        private dialogRef: MatDialogRef<LayerDocumentComponent>,
        @Inject(MAT_DIALOG_DATA) data:any) {
        this.creditId = data.model.dataModal;
    }

    ngOnInit() {
        this.httpClient.get<IObjRequest>(environment.apiUrl+"/forms/download/"+this.creditId+"/1").subscribe(
            (result) => {
                if(result.data != null){
                    this.imageAnverso = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${result.data}`);
                }
            },
            (error) => {
                console.log(<any>error);
            }
        );
        this.httpClient.get<IObjRequest>(environment.apiUrl+"/forms/download/"+this.creditId+"/2").subscribe(
            (result) => {
                if(result.data != null){
                    this.imageReverso = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${result.data}`);
                }
            },
            (error) => {
                console.log(<any>error);
            }
        );
        this.httpClient.get<IObjRequest>(environment.apiUrl+"/forms/transaction/"+this.creditId+"/1").subscribe(
            (result) => {
                if (result.data != null) {
                    this.ObjData = result.data;
                    if (this.ObjData.hasOwnProperty("estatus")) {
                        this.ine.mrz = this.ObjData.mensaje;
                        this.ine.valido = this.ObjData.mensaje;
                        this.ine.vigencia = this.ObjData.mensaje;
                    } else {
                        this.ine.mrz = this.ObjData.codigoBarras;
                        if (this.ObjData.hasOwnProperty("validacionMRZ")) {
                            this.ine.valido = (this.ObjData.validacionMRZ.vigencia == 'OK') ? 'SI' : 'NO';
                        }
                        this.ine.vigencia = this.ObjData.vigencia;
                    }
                } else {
                    this.ine.mrz = "No se identifico el documento";
                    this.ine.valido = "No se identifico el documento";
                    this.ine.vigencia = "No se identifico el documento";
                }

            },
            (error) => {
                this.ine.mrz = "No se identifico el documento";
                this.ine.valido = "No se identifico el documento";
                this.ine.vigencia = "No se identifico el documento";
            }
        );
        this.imageAnverso = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${image}`);
        this.imageReverso = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${image}`);
    }
}
