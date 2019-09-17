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

import { AppsRoutes } from './medidas.routing';

import { MedidasDataformComponent } from './dataform/dataform.component';
import { MedidasListadoComponent } from './listado/listado.component';

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
  ],
  exports:[
   MatTableModule
  ],
  declarations:[
     MedidasDataformComponent,
     MedidasListadoComponent
  ],
 
  entryComponents: [MedidasListadoComponent]
})

export class MedidasModule { }
