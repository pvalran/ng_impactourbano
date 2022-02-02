import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {LayerDocumentComponent} from "../../dialogs/layer-document/layer-document.component";
import {LayerBiometricComponent} from "../../dialogs/layer-biometric/layer-biometric.component";
import {LayerGovernmentComponent} from "../../dialogs/layer-government/layer-government.component";
import {IObjRequest} from "../../interfaces/iobj-request";
import {HttpClient, HttpResponse} from "@angular/common/http";
import { environment } from "../../../environments/environment";
import {AuthUser} from "../../interfaces/auth";
import {AuthService} from "../../services/auth.service";

export interface layerElement {
    folio: string;
    fecha: string;
    crtdBy: string;
    enrolment: string;
    name: string;
    fisrtLastName: string;
    secondLastName: string;
    status: string;
    layerDocument: string;
    layerBiometic: string;
    solicitud: number
}

let ELEMENT_DATA: layerElement[] =  []



@Component({
    selector: 'app-enrolments',
    templateUrl: './enrolments.component.html',
    styleUrls: ['./enrolments.component.scss']
})
export class EnrolmentsComponent implements OnInit {
    loading = true;
    urlsolicitud = '';
    lyrElt:layerElement;
    userCurrent: any;
    displayedColumns: string[] = ['folio', 'fecha', 'crtdBy','enrolment','name', 'fisrtLastName','secondLastName','status',
        'layerDocument', 'layerBiometic','solicitud'];
    dataSource = new MatTableDataSource<layerElement>(ELEMENT_DATA);
    pageEvent: PageEvent;
    pageSize = 10;

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(public dialog: MatDialog,
                private authUser: AuthService,
                private httpClient:HttpClient) {
        ELEMENT_DATA = [];
        this.urlsolicitud = environment.apiUrl+"/pdf/solicitud/view";
        this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser()));
        this.dataSource.data = ELEMENT_DATA;
    }

    ngOnInit() {
        this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser())) ;
        ELEMENT_DATA = [];
        this.dataSource.paginator = this.paginator;
        this.httpClient.get<IObjRequest>(environment.apiUrl+'/catalogies/getCustomersUser/'+this.userCurrent.idUser).subscribe(
            (result) => {
                try {
                    if (result.data.length > 0) {
                        result.data.forEach((element) => {
                            this.lyrElt = {
                                folio: element.creditId,
                                fecha: element.crtd_on,
                                crtdBy: element.crtd_by,
                                enrolment: element.enrolment,
                                name: element.customer.name,
                                fisrtLastName: element.customer.paternalLastName,
                                secondLastName: element.customer.motherLastName,
                                status: element.status,
                                layerDocument: element.layerDocument,
                                layerBiometic: element.layerBiometric,
                                solicitud: element.solicitud
                            }
                            ELEMENT_DATA.push(this.lyrElt);
                        });
                        this.dataSource.data = ELEMENT_DATA;
                        this.loading = true;
                    }
                } catch(error){
                    this.loading = true;
                }

            },
            (error) => {
                this.loading = true;
            }
        );
    }

    private dataTable(data:any):void {
        ELEMENT_DATA = [];
        this.dataSource.data = ELEMENT_DATA;
        if(data.length > 0){
            data.forEach((element) => {
                this.lyrElt = {
                    folio: element.customer.creditId,
                    fecha: element.customer.birthday,
                    crtdBy: element.crtd_by,
                    enrolment: element.enrolment,
                    name:  element.customer.name,
                    fisrtLastName: element.customer.paternalLastName,
                    secondLastName: element.customer.motherLastName,
                    status: element.status,
                    layerDocument: element.layerDocument,
                    layerBiometic: element.layerBiometric,
                    solicitud: element.solicitud
                }
                ELEMENT_DATA.push(this.lyrElt);
            });
            this.dataSource.data = ELEMENT_DATA;

        }
    }

    private isNaN (val) {
        return Number.isNaN(parseFloat(val))? 0: val;
    }

    private applyFilter(filterValue: string) {
        let dataFilter = {
            startdate: "",
            enddate: "",
            status: "",
            search: filterValue
        }

        ELEMENT_DATA = [];
        this.dataSource.data = ELEMENT_DATA;
        this.dataSource.filter = filterValue.trim().toLowerCase();
        this.loading = false;
        if (this.dataSource.filteredData.length == 0) {
            this.httpClient.post<IObjRequest>(environment.apiUrl+"/filter/customerstransacion/search",dataFilter)
            .subscribe(
                (response:any) => {
                    if (response.result) {
                        this.dataSource.filter = '';
                        this.dataTable(response.data);
                        this.loading = true;
                    }
                },
                (error:any) => { this.loading = true;}
            );
        }
    }

    exportExcel(){
        const httpOptions = {
            responseType: 'arraybuffer',
            headers: new Headers()
        };
        // @ts-ignore
        this.httpClient.get<Blob>(environment.apiUrl+"/export/enrolments/excel/"+this.userCurrent.idUser,httpOptions)
        .subscribe(
            (response: HttpResponse<Blob>) => {
                let binaryData = [];
                binaryData.push(response);
                let downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: 'blob' }));
                downloadLink.setAttribute('download', "enrolados.xlsx");
                document.body.appendChild(downloadLink);
                downloadLink.click();
            },
            (error:any) => { console.log(error); this.loading = true;}
        );
    }

    dlgLayerDocument(creditId: any){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        dialogConfig.data = {
            idDocument: 5
        };
        this.dialog.open(LayerDocumentComponent, {data: {
                model:{dataModal: creditId} }
        });
    }

    dlgLayerBiometric(creditId: any){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        dialogConfig.data = {
            idDocument: 5
        };
        this.dialog.open(LayerBiometricComponent, {data: {
                model:{dataModal: creditId} }
        });
    }

    dlgSolicitud(creditId: any){

    }
}
