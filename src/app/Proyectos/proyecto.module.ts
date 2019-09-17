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
  MatPaginatorModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppsRoutes } from './proyecto.routing';
import { OpinionModule } from '../Opinion/opinion.module';
import { ProyectoDataformComponent } from './dataform/dataform.component';
import { ProyectoListadoComponent } from './listado/listado.component';
import { ProyectoDetalleComponent } from './detalle/detalle.component';

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
      FlexLayoutModule,
      OpinionModule
     
  ],
  exports:[
   MatTableModule
  ],
  declarations: [
        		
	ProyectoDataformComponent,
	ProyectoListadoComponent,
	ProyectoDetalleComponent
  ],
 
  entryComponents: [ProyectoListadoComponent]
})

export class ProyectoModule { }