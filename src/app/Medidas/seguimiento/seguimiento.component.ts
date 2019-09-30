import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { MedidasAvancesComponent } from '../avances/avances.component';
import { Location } from '@angular/common';


@Component({
  selector: 'medidas-seguimiento',
  templateUrl: './seguimiento.component.html',
  styleUrls: ['./seguimiento.component.scss']
})
export class MedidasSeguimientoComponent implements OnInit {

  constructor(private dialog:MatDialog,
    private location: Location) { }

  ngOnInit() {
  }

  openDialog() {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      this.dialog.open(MedidasAvancesComponent, dialogConfig);
  }

  seguimientoIndividual(){
     console.log('Seguimiento individual');
  }

  seguimientoMultiple(){
    console.log('Seguimiento Multiple');
  }

  navigateBack() {
    this.location.back();
  }

}
