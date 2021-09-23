import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../interfaces/user";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";
import {IObjRequest} from "../../interfaces/iobj-request";
import {environment} from "../../../environments/environment";
import {EditionBranchComponent } from "./edition-branch/edition-branch.component";
import {Branchoffice} from "../../interfaces/branchoffice";

let ELEMENT_DATA: Branchoffice[] =  []


@Component({
  selector: 'app-branchoffice',
  templateUrl: './branchoffice.component.html',
  styleUrls: ['./branchoffice.component.scss']
})
export class BranchofficeComponent implements OnInit {

  lyrBranch:Branchoffice;
  displayedColumns: string[] = ['id','name', 'city','state','status_flag','opciones'];
  dataSource = new MatTableDataSource<Branchoffice>(ELEMENT_DATA);
  state = [
    "Aguascalientes",
    "Baja California",
    "Baja California Sur",
    "Campeche",
    "Coahuila de Zaragoza",
    "Colima",
    "Chiapas",
    "Chihuahua",
    "Ciudad de México",
    "Durango",
    "Guanajuato",
    "Guerrero",
    "Hidalgo",
    "Jalisco",
    "México",
    "Michoacán de Ocampo",
    "Morelos",
    "Nayarit",
    "Nuevo León",
    "Oaxaca",
    "Puebla",
    "Querétaro",
    "Quintana Roo",
    "San Luis Potosí",
    "Sinaloa",
    "Sonora",
    "Tabasco",
    "Tamaulipas",
    "Tlaxcala",
    "Veracruz de Ignacio de la Llave",
    "Yucatán",
    "Zacatecas"
  ]

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(public dialog: MatDialog,private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    ELEMENT_DATA = [];
    this.dataSource.data = ELEMENT_DATA;
    this.httpClient.get<IObjRequest>(environment.apiUrl+'/forms/branchoffice').subscribe(
        (response) => {
          if(response.data.length > 0){
            response.data.forEach((element) => {
              this.lyrBranch = {
                id: element.id,
                numberBranch: element.numberBranch,
                name: element.name,
                city: element.city,
                state: element.state,
                status_flag: element.status_flag,
              }
              ELEMENT_DATA.push( this.lyrBranch);
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

  newBranch(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = false;
    this.dialog.open(EditionBranchComponent, {data: {
        model:{dataModal: ""} }
    });
  }

  editBranch(idBranch: any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;
    dialogConfig.disableClose = false;
    this.dialog.open(EditionBranchComponent, {data: {
        model:{dataModal: idBranch} }
    });
  }
}
