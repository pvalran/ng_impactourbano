import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
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

import { AppsRoutes } from './impactourbano.routing';
import { ImpactourbanoComponentModule} from "../../impactourbano/Impactourbano.module";
import { OpinionModule } from '../opinion/opinion.module';
import { MedidasModule } from '../medidas/medidas.module';
import { OpinionComponentModule } from "../../opinion/opinion.module";
import { MedidasComponentModule } from "../../medidas/medidas.module";

import { EdicionImpactoUrbanoComponent } from './edicion-impacto-urbano.component';
import { ListadoImpactoUrbanoComponent } from './listado-impacto-urbano.component';
import { DetalleImpactoUrbanoComponent } from './detalle-impacto-urbano.component';

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
		MatTooltipModule,
		FlexLayoutModule,
		OpinionModule,
		MedidasModule,
		ImpactourbanoComponentModule,
		OpinionComponentModule,
		MedidasComponentModule
	],
	declarations: [EdicionImpactoUrbanoComponent,
		ListadoImpactoUrbanoComponent,
		DetalleImpactoUrbanoComponent
	]
})
export class ImpactourbanoModule { }
