import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { FileManagerEdicionComponent} from "../../filemanager/edicion/edicion.component";

@Component({
	selector: 'opinion-dataform',
	templateUrl: './dataform.component.html',
	styleUrls: ['./dataform.component.scss']
})
export class DataformComponent implements OnInit {

	constructor(private location:Location,
	            private dialog:MatDialog) { }

	ngOnInit() {
	}

	navigateBack(){
		this.location.back();
	}

	openDialog(){
		const dialogConfig = new MatDialogConfig();
		dialogConfig.autoFocus = false;
		dialogConfig.disableClose = false;
		this.dialog.open(FileManagerEdicionComponent,dialogConfig);
	}
}
