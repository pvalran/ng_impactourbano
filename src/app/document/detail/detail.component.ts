import { Component, OnInit } from '@angular/core';
import {RequestDetalleCredito} from '../../interfaces/request-detalle-credito';
import {ServicesDetalleCreditoService} from '../../services/services-detalle-credito.service';
import {IDocument} from '../../interfaces/document';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import {DialogDetailComponent} from '../../dialogs/dialog-detail/dialog-detail.component';
import { ViewComponent } from '../../dialogs/view/view.component';
import { PdfComponent} from '../../dialogs/pdf/pdf.component';

@Component({
    selector: 'app-document-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
    Docs:IDocument[] = [];
    typeDocument:String[] = [
       "CREDENCIAL DE ELECTOR ANVERSO",
       "CREDENCIAL DE ELECTOR REVERSO",
       "SELFIE",
       "CURP",
       "COMPROBANTE DE DOMICILIO",
       "COMPROBANTE DE INGRESOS",
       "CARTA DE CONSENTIMIENTO",
       "ACTA DE MATRIMONIO",
       "SOLICITUD DE CREDITO",
       "EXPENDIENTE DE FOVISSSTE",
       "SALDO SUBCUENTA DE VIVIENDA",
       "CREDENCIAL DE ELECTOR ANVERSO CONYUGE",
       "CREDENCIAL DE ELECTOR REVERSO CONYUGE",
       "SELFIE COYUGE",
       "CREDENCIAL DE ELECTOR ANVERSO CO-ACREDITADO",
       "CURP CO-ACREDITADO",
       "COMPROBANTE DE DOMICILIO CO-ACREDITADO",
       "COMPROBANTE DE INGRESOS CO-ACREDITADO",
       "ESTADO DE CUENTA BANCARIO CO-ACREDITADO",
       "ACTA DE MATRIMONIO CO-ACREDITADO",
       "ACTA DE NACIMIENTO CO-ACREDITADO"
    ];
    constructor( private srvDetalle: ServicesDetalleCreditoService,
                 public dialog: MatDialog) {
        this.Docs = srvDetalle.ObjDetalleCredito.documents;
    }

    ngOnInit(): void {
    }

    download(IdDocument: number){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        dialogConfig.data = {
            idDocument: IdDocument
        };
        this.dialog.open(ViewComponent, {data: {
                model:{dataModal: IdDocument} }
        });
    }

    downloadPdf(IdDocument: number){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        dialogConfig.data = {
            idDocument: IdDocument
        };
        this.dialog.open(PdfComponent, {data: {
                model:{dataModal: IdDocument} }
        });
    }
}
