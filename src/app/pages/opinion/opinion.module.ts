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

import { AppsRoutes } from './opinion.routing';
import { ImpactourbanoComponentModule} from "../../impactourbano/Impactourbano.module";
import { OpinionComponentModule} from "../../opinion/opinion.module";
import { EdicionOpinionComponent } from './edicion-opinion.component';
import { ListadoOpinionComponent } from './listado-opinion.component';
import { DetalleOpinionComponent } from './detalle-opinion.component';
import {ListadoComponent} from "../../opinion/listado/listado.component";
import {DataformComponent} from "../../opinion/dataform/dataform.component";

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
		OpinionComponentModule,
		ImpactourbanoComponentModule
	],
    declarations: [EdicionOpinionComponent,
	  ListadoOpinionComponent,
	  DetalleOpinionComponent
    ],
	entryComponents: [ListadoOpinionComponent]
})
export class OpinionModule { }
