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
import { OpinionComponentModule } from '../opinion/opinion.module';
import { MedidasComponentModule } from '../medidas/medidas.module';
import { ProyectoDataformComponent } from './dataform/dataform.component';
import { ProyectoListadoComponent } from './listado/listado.component';
import { ProyectoDetalleComponent } from './detalle/detalle.component';
import { MAT_LABEL_GLOBAL_OPTIONS } from "@angular/material/core";
import { ProyectoDescripcionComponent } from './descripcion/descripcion.component';

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
		OpinionComponentModule,
		MedidasComponentModule
	],
	exports: [
		MatTableModule,
		ProyectoDataformComponent,
		ProyectoListadoComponent,
		ProyectoDescripcionComponent
	],
	declarations: [
		ProyectoDataformComponent,
		ProyectoListadoComponent,
		ProyectoDetalleComponent,
		ProyectoDescripcionComponent
	],
	providers: [
		{provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}}
	],
	entryComponents: [ProyectoListadoComponent]
})

export class ImpactourbanoComponentModule { }
