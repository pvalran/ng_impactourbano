import {Component, ViewChild} from '@angular/core';

import { Router } from '@angular/router';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {LayerGovernmentComponent} from "../dialogs/layer-government/layer-government.component";
import {LayerBiometricComponent} from "../dialogs/layer-biometric/layer-biometric.component";
import {LayerDocumentComponent} from "../dialogs/layer-document/layer-document.component";
import {IObjRequest} from "../interfaces/iobj-request";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as _moment from 'moment';
import {FormControl} from '@angular/forms';
import {now} from "moment";
import {RequestDetalleCredito} from "../interfaces/request-detalle-credito";
import {DialogDetailComponent} from "../dialogs/dialog-detail/dialog-detail.component";

import {ServicesDataService} from "../services/services-data.service";
import {ServicesDetalleCreditoService} from "../services/services-detalle-credito.service";
import {environment} from "../../environments/environment";

const moment =  _moment;

export interface layerElement {
    folio: string;
    fecha: string;
    crtdBy: string;
    email: string;
    mobile: string;
    status: string;
    layerDocument: string;
    layerBiometic: string;
    layerGovernment: string;
}


export interface filterSearch {
    start_date: any;
    end_date: any;
    status: any;
}


let ELEMENT_DATA: layerElement[] =  []

export const MY_FORMATS = {
    parse: {
        dateInput: 'YYYY-MM-DD',
    },
    display: {
        dateInput: 'YYYY-MM-DD',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'YYYY-MM-DD',
        monthYearA11yLabel: 'MMMM YYYY',
    },
};

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    providers: [{
        provide: DateAdapter,
        useClass: MomentDateAdapter,
        deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    }, {
        provide: MAT_DATE_FORMATS, useValue: MY_FORMATS
    },
    ],
})
export class DashboardComponent {
    loading = true;
    dateStart = moment().format('YYYY-MM-DD');
    dateEnd = moment().format('YYYY-MM-DD');
    status = '';
    lyrElt:layerElement;
    search:filterSearch = {
        start_date: moment().format('YYYY-MM-DD'),
        end_date: moment().format('YYYY-MM-DD'),
        status: ''
    };
    statistics = {
        TOTAL: 0,
        APPROVED: 0,
        REJECTED: 0,
        PENDING:0
    };

    urlreport = '';


    pageEvent: PageEvent;
    pageSize = 10;
    displayedColumns: string[] = ['folio', 'fecha','crtdBy', 'email','mobile','status',
        'layerDocument', 'layerBiometic', 'layerGovernment','reporte','solicitud'];
    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    dataSource = new MatTableDataSource<layerElement>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(public dialog: MatDialog,
                private router: Router,
                private service: ServicesDataService,
                private srvDetalle: ServicesDetalleCreditoService,
                private httpClient: HttpClient,
    ) {

        this.urlreport = environment.apiUrl+"/pdf/identidadreport";
        ELEMENT_DATA = [];
    }

    ngOnInit() {
        let month = moment().format('MM');
        const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
        const endOfMonth = moment().endOf('month').format('YYYY-MM-DD');
        this.search.start_date = startOfMonth;
        this.search.end_date = endOfMonth;
        this.dataSource.paginator = this.paginator;
        ELEMENT_DATA = [];
        this.filterSearch();
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

    dlgLayerGovernment(creditId: any){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        dialogConfig.data = {
            idDocument: 5
        };
        this.dialog.open(LayerGovernmentComponent, {data: {
            model:{dataModal: creditId} }
        });
    }

    dlgInfo(creditId: any){
        this.loading = false;
        this.httpClient.get<RequestDetalleCredito>(environment.apiUrl+'/catalogies/getDetalleCredito/'+creditId).subscribe(
            (result) => {
                this.loading = true;
                this.srvDetalle.ObjDetalleCredito = result.data;
                const dialogConfig = new MatDialogConfig();
                dialogConfig.autoFocus = false;
                dialogConfig.disableClose = false;
                this.dialog.open(DialogDetailComponent, dialogConfig);

            },
            (error) => {
                this.loading = true;
            }
        );
    }

    exportExcel(){
        let startdate = this.search.start_date;
        let enddate = this.search.end_date;
        let status = this.search.status.toString();

        let dataFilter = {
            startdate: this.search.start_date,
            enddate: this.search.end_date,
            status: this.search.status.toString()
        }

        const httpOptions = {
            responseType: 'arraybuffer',
            headers: new Headers()
        };

        // @ts-ignore
        this.httpClient.post<Blob>(environment.apiUrl+"/export/customerstransaction/excel",dataFilter,httpOptions)
        .subscribe(
            (response: HttpResponse<Blob>) => {
                    console.log(response);
                    let filename: string = this.getFileName(response)
                    let binaryData = [];
                    binaryData.push(response);
                    let downloadLink = document.createElement('a');
                    downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: 'blob' }));
                    downloadLink.setAttribute('download', "transaciones.xlsx");
                    document.body.appendChild(downloadLink);
                    downloadLink.click();
                },
            (error:any) => { console.log(error); this.loading = true;}
        );
    }

    downLoadFile(data: any, type: string) {
        let blob = new Blob([data], { type: type});
        let url = window.URL.createObjectURL(blob);
        let pwa = window.open(url);
        if (!pwa || pwa.closed || typeof pwa.closed == 'undefined') {
            alert( 'Please disable your Pop-up blocker and try again.');
        }
    }

    getFileName(response: HttpResponse<Blob>) {
        let filename: string;
        try {
            const contentDisposition: string = response.headers.get('content-disposition');
            const r = /(?:filename=")(.+)(?:;")/
            filename = r.exec(contentDisposition)[1];
        }
        catch (e) {
            filename = 'myfile.txt'
        }
        return filename
    }



    filterSearch(){
        let startdate = this.search.start_date;
        let enddate = this.search.end_date;
        let status = this.search.status.toString();

        let dataFilter = {
            startdate: this.search.start_date,
            enddate: this.search.end_date,
            status: this.search.status.toString()
        }

        ELEMENT_DATA = [];
        this.dataSource.data = ELEMENT_DATA;
        this.loading = false;
        this.httpClient.post<IObjRequest>(environment.apiUrl+"/filter/customerstransacion",dataFilter)
        .subscribe(
            (response:any) => {
                this.dataTable(response.data);
                this.loading = true;
            },
            (error:any) => { console.log(error); this.loading = true;}
        );

        this.httpClient.post<IObjRequest>(environment.apiUrl+"/filter/statisticstransacion",dataFilter)
        .subscribe(
            (response:any) => {

                this.statistics.TOTAL = 0;
                this.statistics.APPROVED = 0;
                this.statistics.REJECTED = 0;
                this.statistics.PENDING = 0;
                response.data.map((data) => {
                    this.statistics.TOTAL = this.statistics.TOTAL + data.total;
                    switch (data.status.trim()) {
                        case 'A':
                            this.statistics.APPROVED = data.total;
                            break;
                        case 'R':
                            this.statistics.REJECTED = data.total;
                            break;
                        case 'P':
                            this.statistics.PENDING= data.total;
                            break;

                    }
                })
                this.loading = true;
            },
            (error:any) => { this.loading = true; }
        );
    }

    public onDate(event): void {
        console.log(event);

    }

    private dataTable(data:any):void {
        ELEMENT_DATA = [];
        if(data.length > 0){
            data.forEach((element) => {
                this.lyrElt = {
                    folio: element.creditId,
                    crtdBy: element.crtd_by,
                    fecha: element.crtd_on,
                    email:  element.customer.email,
                    mobile: element.mobile,
                    status: element.status,
                    layerDocument: element.layerDocument,
                    layerBiometic: element.layerBiometric,
                    layerGovernment: element.layerGobernment
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
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.filteredData.length == 0) {
            ELEMENT_DATA = [];
            this.dataSource.data = ELEMENT_DATA;
            this.httpClient.post<IObjRequest>(environment.apiUrl+"/filter/customerstransacion/search",dataFilter)
                .subscribe(
                    (response:any) => {
                        if (response.result) {
                            this.dataSource.filter = '';
                            this.dataTable(response.data);
                        }
                    },
                    (error:any) => { console.log(error); }
                );
        }
    }
}
