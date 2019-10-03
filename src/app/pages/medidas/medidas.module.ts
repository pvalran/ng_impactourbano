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

import { AppsRoutes } from './medidas.routing';
import { ImpactourbanoComponentModule} from "../../impactourbano/Impactourbano.module";
import { MedidasComponentModule } from "../../medidas/medidas.module";
import { FilemanagerModule } from "../../filemanager/filemanager.module";
import { DetalleMedidasComponent } from './detalle-medidas.component';
import { EdicionMedidasComponent } from './edicion-medidas.component';
import { ListadoMedidasComponent } from './listado-medidas.component';
import { SeguimientoMedidasComponent } from './seguimiento-medidas.component';
import { MedidasAvancesComponent } from '../../medidas/avances/avances.component';
import { DialogComponent } from '../../medidas/dialog/dialog.component';

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(AppsRoutes),
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
		MedidasComponentModule,
		ImpactourbanoComponentModule,
		FilemanagerModule
	],
	declarations: [
		EdicionMedidasComponent,
		ListadoMedidasComponent,
		SeguimientoMedidasComponent,
		DetalleMedidasComponent
	]
})
export class MedidasModule { }
