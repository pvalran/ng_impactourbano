import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { EditionComponent } from "./edition/edition.component";
import { IObjRequest } from "../../interfaces/iobj-request";
import {HttpClient, HttpResponse} from "@angular/common/http";
import { User } from "../../interfaces/user";
import { environment } from "../../../environments/environment";
import {layerElement} from "../enrolments/enrolments.component";
import {AuthService} from "../../services/auth.service";


let ELEMENT_DATA: User[] =  []

@Component({
    selector: 'app-leaflet',
    templateUrl: './leaflet.component.html',
    styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements OnInit {
    loading = true;
    lyrUser:User;
    userCurrent: any;
    pageEvent: PageEvent;
    pageSize = 10;
    displayedColumns: string[] = ['idUser','name', 'paternalLastName','motherLastName','email','status_flag','opciones'];
    dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

    @ViewChild(MatPaginator) paginator: MatPaginator;

    constructor(public dialog: MatDialog,
                private httpClient: HttpClient,
                private authUser:AuthService) {
        this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser())) ;
    }

    ngOnInit() {
        this.dataSource.paginator = this.paginator;
        this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser())) ;
        ELEMENT_DATA = [];
        this.dataSource.data = ELEMENT_DATA;
        this.httpClient.get<IObjRequest>(environment.apiUrl+'/catalogies/getLeafletUser/'+this.userCurrent.idUser).subscribe(
            (response) => {
                if(response.data.length > 0){
                    response.data.forEach((element) => {
                        this.lyrUser = {
                            idUser: element.idUser,
                            name: element.name,
                            paternalLastName:  element.paternalLastName,
                            motherLastName:  element.motherLastName,
                            email: element.email,
                            profileId:  element.profileId,
                            confirme_email: element.email,
                            password: '',
                            confirme_password: '',
                            status_flag:element.status_flag,
                            phone:"",
                            sucursal:1
                        }
                        ELEMENT_DATA.push( this.lyrUser);
                        this.dataSource.data = ELEMENT_DATA;

                    });
                } else {

                }
            },
            (error) => {

            }
        );
    }

    applyFilter(filterValue: string) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    newUser(){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        this.dialog.open(EditionComponent, {data: {
                model:{dataModal: "",
                    dataPassword:false} }
        });
    }

    editUser(idUser: any){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        this.dialog.open(EditionComponent, {data: {
                model:{dataModal: idUser,
                    dataPassword:false} }
        });
    }

    exportExcel(){
        const httpOptions = {
            responseType: 'arraybuffer',
            headers: new Headers()
        };
        // @ts-ignore
        this.httpClient.get<Blob>(environment.apiUrl+"/export/leaflet/excel",httpOptions)
        .subscribe(
            (response: HttpResponse<Blob>) => {
                let binaryData = [];
                binaryData.push(response);
                let downloadLink = document.createElement('a');
                downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: 'blob' }));
                downloadLink.setAttribute('download', "prospectos.xlsx");
                document.body.appendChild(downloadLink);
                downloadLink.click();
            },
            (error:any) => { console.log(error); this.loading = true;}
        );
    }

    changePasswordUser(idUser: any){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        this.dialog.open(EditionComponent, {data: {
                model:{dataModal: idUser,
                    dataPassword:true} }
        });
    }
}
