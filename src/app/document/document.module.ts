import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentRoutingModule } from './document-routing.module';
import { DetailComponent } from './detail/detail.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatLineModule} from '@angular/material/core';
import {MatListModule} from "@angular/material/list";


@NgModule({
    declarations: [
        DetailComponent,

    ],
    exports: [
        DetailComponent
    ],
    imports: [
        CommonModule,
        DocumentRoutingModule,
        MatIconModule,
        MatCardModule,
        MatLineModule,
        MatListModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class DocumentModule { }
