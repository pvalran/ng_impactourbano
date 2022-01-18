import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatListModule,
  MatProgressBarModule,
  MatMenuModule,
    MatDialogModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatTableModule} from "@angular/material/table";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NativeDateModule} from "@angular/material/core";
import {MatSelectModule} from "@angular/material/select";
import {DialogsModule} from "../dialogs/dialogs.module";






@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(DashboardRoutes),
        MatIconModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatProgressBarModule,
        MatMenuModule,
        ChartsModule,
        NgxDatatableModule,
        FlexLayoutModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatTooltipModule,
        MatTableModule,
        MatInputModule,
        MatDialogModule,
        MatDatepickerModule,
        NativeDateModule,
        ReactiveFormsModule,
        MatSelectModule,
        FormsModule,
        DialogsModule
    ],
    exports: [


    ],
    entryComponents: [

    ],
    declarations: [
        DashboardComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule {}
