import {Component, Inject, Input, OnInit} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { image } from './image';
import {MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {DialogDetailComponent} from '../dialog-detail/dialog-detail.component';
import {IObjRequest} from '../../interfaces/iobj-request';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../../environments/environment";


export interface Imodel{ dataModal: number; }

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
    @Input() idDocument = '';
    IdDocument: number;
    imageSource: any;

    constructor(
        private httpClient: HttpClient,
        private sanitizer: DomSanitizer,
        private dialogRef: MatDialogRef<ViewComponent>,
        @Inject(MAT_DIALOG_DATA) data:any) {
        console.log(data.model.dataModal);
        this.IdDocument = data.model.dataModal;
    }

    ngOnInit () {
        this.httpClient.get<IObjRequest>(environment.apiUrl+"/forms/download/"+this.IdDocument).subscribe(
            (result) => {
                if(result.data != null){
                    this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${result.data}`);
                }
            },
            (error) => {
                console.log(<any>error);
            }
        );
        this.imageSource = this.sanitizer.bypassSecurityTrustResourceUrl(`data:image/png;base64, ${image}`);
    }


        //href="https://pimaid.dev:8443/CreditoParaTi/forms/download/{{ document.idDocument }}"

}
