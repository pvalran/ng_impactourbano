import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogConfig} from "@angular/material/dialog";
import {FileManagerEdicionComponent} from "../../filemanager/edicion/edicion.component";

@Component({
  selector: 'medidas-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class MedidasDetalleComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit() {
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = false;
    this.dialog.open(FileManagerEdicionComponent,dialogConfig);
  }
}
