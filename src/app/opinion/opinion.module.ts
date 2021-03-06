import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
	MatToolbarModule,
	MatIconModule,
	MatCardModule,
	MatInputModule,
	MatButtonModule,
	MatButtonToggleModule,
	MatListModule,
	MatGridListModule,
	MatMenuModule,
	MatSidenavModule,
	MatProgressBarModule,
	MatTabsModule,
	MatDialogModule,
	MatExpansionModule,
	MatCheckboxModule,
	MatTableModule,
	MatPaginatorModule,
	MatTooltipModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilemanagerModule } from "../filemanager/filemanager.module";
import { DataformComponent } from './dataform/dataform.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatInputModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatListModule,
		MatGridListModule,
		MatMenuModule,
		MatSidenavModule,
		MatProgressBarModule,
		MatTabsModule,
		MatDialogModule,
		MatExpansionModule,
		MatCheckboxModule,
		MatTableModule,
		MatPaginatorModule,
		MatTooltipModule,
		FlexLayoutModule,
		FilemanagerModule
	],
	declarations: [
		DataformComponent,
		ListadoComponent
	],
	entryComponents: [ListadoComponent],
	exports: [
		DataformComponent,
		ListadoComponent
	]
})

export class OpinionComponentModule { }
