import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { EditionComponent } from "./edition/edition.component";
import { IObjRequest } from "../../interfaces/iobj-request";
import { HttpClient } from "@angular/common/http";
import { User } from "../../interfaces/user";
import { environment } from "../../../environments/environment";


let ELEMENT_DATA: User[] =  []

@Component({
  selector: 'app-leaflet',
  templateUrl: './leaflet.component.html',
  styleUrls: ['./leaflet.component.scss']
})
export class LeafletComponent implements OnInit {

  lyrUser:User;
  displayedColumns: string[] = ['idUser','name', 'paternalLastName','motherLastName','email','status_flag','opciones'];
  dataSource = new MatTableDataSource<User>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog,private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    ELEMENT_DATA = [];
    this.dataSource.data = ELEMENT_DATA;
    this.httpClient.get<IObjRequest>(environment.apiUrl+'/forms/userboard/app').subscribe(
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