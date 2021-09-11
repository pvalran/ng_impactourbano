import {Component, ElementRef, Inject, Input, OnInit, ViewChild} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { image } from '../view/image';
import { pdf } from '../view/pdf';
import {MAT_DIALOG_DATA, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import {DialogDetailComponent} from '../dialog-detail/dialog-detail.component';
import {IObjRequest} from '../../interfaces/iobj-request';
import {HttpClient} from '@angular/common/http';
import {toBase64String} from '@angular/compiler/src/output/source_map';
import {DOCUMENT} from '@angular/common';


@Component({
    selector: 'app-pdf',
    templateUrl: './pdf.component.html',
    styleUrls: ['./pdf.component.scss']
})
export class PdfComponent implements OnInit {
    @Input() idDocument = '';
    @ViewChild('iframe') iframe!: ElementRef;

    IdDocument: number;
    imageSource: any;
    constructor(
        private httpClient: HttpClient,
        private sanitizer: DomSanitizer,
        private dialogRef: MatDialogRef<PdfComponent>,
        @Inject(DOCUMENT) document:any,
        @Inject(MAT_DIALOG_DATA) data:any) {
        console.log(data.model.dataModal);
        this.IdDocument = data.model.dataModal;
    }

    ngOnInit() {
        /*this.httpClient.get<IObjRequest>("/forms/download/"+this.IdDocument).subscribe(
            (result) => {
                if(result.data != null){
                    const Base64String = `${result.data}`;
                    const byteArray = new Uint8Array(atob(Base64String).split('').map(char => char.charCodeAt(0)));
                    const blob = new Blob([byteArray], {type: 'application/pdf'});
                    const url = window.URL.createObjectURL(blob);

                    // i.e. display the PDF content via iframe
                    let iframe = this.iframe.nativeElement
                    iframe.src = url;
                }
            },
            (error) => {
                console.log(<any>error);
            }
        );*/

        let PathReportString = 'data:application/pdf;base64,' + (this.sanitizer.bypassSecurityTrustResourceUrl(pdf) as any).changingThisBreaksApplicationSecurity;

        document.getElementById('ifrm').setAttribute("src", PathReportString);

    }


   /* fetch(fileUploaded.content)
.then(response => {
    // response.data -> response data base64 encoded
    // decoding the data via atob()
    const byteArray = new Uint8Array(atob(response.data).split('').map(char => char.charCodeAt(0)));
    return new Blob([byteArray], {type: 'application/pdf'});
})
.then(blob => {
    // Here is your URL you can use
    const url = window.URL.createObjectURL(blob);

    // i.e. display the PDF content via iframe
    document.querySelector("iframe").src = url;
});*/
}
