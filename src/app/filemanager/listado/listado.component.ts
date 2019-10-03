import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { FileManagerEdicionComponent } from "../edicion/edicion.component";
import {Location} from "@angular/common";


library.add(fas);

@Component({
	selector: 'filemanager-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.scss']
})
export class FileManagerListadoComponent implements OnInit {
	constructor(private dialog:MatDialog,
	            private location: Location) { }

	ngOnInit() {
	}

	openDialog(){
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		this.dialog.open(FileManagerEdicionComponent, dialogConfig);
	}
}
