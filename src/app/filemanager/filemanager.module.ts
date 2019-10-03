import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MatCardModule,
	MatButtonModule,
	MatDialogModule,
	MatInputModule,
	MatFormFieldModule,
	MatSelectModule,
	MatIconModule,
	MatTooltipModule,
	MatListModule
} from "@angular/material";
import { FlexLayoutModule} from "@angular/flex-layout";

import { FileManagerListadoComponent } from './listado/listado.component';
import { FileManagerEdicionComponent } from './edicion/edicion.component';
import {MAT_LABEL_GLOBAL_OPTIONS} from "@angular/material/core";
import {ProyectoListadoComponent} from "../impactourbano/listado/listado.component";

@NgModule({
	imports: [
		CommonModule,
		RouterModule,
		MatCardModule,
		MatButtonModule,
		MatDialogModule,
		MatInputModule,
		MatFormFieldModule,
		MatSelectModule,
		MatIconModule,
		MatTooltipModule,
		MatListModule,
		FlexLayoutModule,
		FontAwesomeModule
	],
	providers: [
		{
			provide: MAT_LABEL_GLOBAL_OPTIONS,
			useValue: {float: 'always'}
		}
	],
	declarations: [
		FileManagerListadoComponent,
		FileManagerEdicionComponent
	],
	exports: [
		FileManagerEdicionComponent,
		FileManagerListadoComponent
	],
	entryComponents: [
		FileManagerEdicionComponent
	]
})
export class FilemanagerModule { }
