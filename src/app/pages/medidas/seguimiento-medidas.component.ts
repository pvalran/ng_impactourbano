import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {MedidasAvancesComponent} from "../../medidas/avances/avances.component";

@Component({
	selector: 'app-seguimiento-medidas',
	templateUrl: './seguimiento-medidas.component.html',
	styleUrls: ['./seguimiento-medidas.component.scss']
})
export class SeguimientoMedidasComponent implements OnInit {

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