import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {AppsRoutes} from "./pages-routing.module";
import { EnrolmentsComponent } from './enrolments/enrolments.component';
import { AdministrationComponent } from './administration/administration.component';
import { UsuarioComponent } from './administration/usuario/usuario.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FlexModule} from "@angular/flex-layout";
import {MatTableModule} from "@angular/material/table";
import {MatSortModule} from "@angular/material/sort";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatDialogModule} from "@angular/material/dialog";
import {DashboardModule } from "../dashboard/dashboard.module";
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatCardModule} from "@angular/material/card";

import { LeafletComponent } from './leaflet/leaflet.component';
import { EditionComponent } from './leaflet/edition/edition.component';
import {ShareModule} from "../share/share.module";
import { BranchofficeComponent } from './branchoffice/branchoffice.component';
import { EditionBranchComponent } from './branchoffice/edition-branch/edition-branch.component';





@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AppsRoutes),
        ShareModule,
        MatFormFieldModule,
        MatInputModule,
        FlexModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        DashboardModule,
        FormsModule,
        MatSelectModule,
        MatCheckboxModule,
        MatCardModule
    ],
    exports:[
        UsuarioComponent

    ],
    entryComponents:[
        UsuarioComponent,
        EditionComponent,
        EditionBranchComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  declarations: [EnrolmentsComponent,
      AdministrationComponent,
      UsuarioComponent,
      LeafletComponent,
      EditionComponent,
      BranchofficeComponent,
      EditionBranchComponent

  ]
})
export class PagesModule { }
