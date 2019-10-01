import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
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
	MatSelectModule,
	MatPaginatorModule,
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MedidasDataformComponent } from './dataform/dataform.component';
import { MedidasListadoComponent } from './listado/listado.component';
import { MedidasSeguimientoComponent } from './seguimiento/seguimiento.component';
import { MedidasAvancesComponent } from './avances/avances.component';
import { DialogComponent } from './dialog/dialog.component';

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
		MatSelectModule,
		CKEditorModule,
		FlexLayoutModule,
	],
	exports: [
		MatTableModule,
		MedidasListadoComponent,
		MedidasDataformComponent,
		MedidasSeguimientoComponent
	],
	declarations:[
		MedidasDataformComponent,
		MedidasListadoComponent,
		MedidasSeguimientoComponent,
		MedidasAvancesComponent,
		DialogComponent
	],
	entryComponents: [MedidasListadoComponent,
		MedidasAvancesComponent
	]
})

export class MedidasComponentModule { }