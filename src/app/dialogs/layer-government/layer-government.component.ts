import {Component, Inject, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {IObjRequest} from "../../interfaces/iobj-request";
import {image} from "../../core/image";
import {environment} from "../../../environments/environment";

@Component({
    selector: 'app-layer-government',
    templateUrl: './layer-government.component.html',
    styleUrls: ['./layer-government.component.scss']
})
export class LayerGovernmentComponent implements OnInit {
    creditId:any;
    imageSource: any;
    ObjData: any;
    constructor(
        private httpClient: HttpClient,
        private sanitizer: DomSanitizer,
        private dialogRef: MatDialogRef<LayerGovernmentComponent>,
        @Inject(MAT_DIALOG_DATA) data:any) {
        this.creditId = data.model.dataModal;
    }

    ngOnInit() {
        this.httpClient.get<IObjRequest>(environment.apiUrl+"/forms/download/"+this.creditId+"/4").subscribe(
            (result) => {
                if(result.data != null){
                    this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${result.data}`);
                }
            },
            (error) => {
                console.log(<any>error);
            }
        );
        this.httpClient.get<IObjRequest>(environment.apiUrl+"/forms/transaction/"+this.creditId+"/3").subscribe(
            (result) => {

                this.ObjData = result.data;
                console.log(this.ObjData.estatus);

            },
            (error) => {
                console.log(<any>error);
            }
        );
        this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${image}`);
    }

}
