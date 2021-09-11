import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferenceRoutingModule } from './reference-routing.module';
import { DetailComponent } from './detail/detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatLineModule} from '@angular/material/core';


@NgModule({
    declarations: [
        DetailComponent
    ],
    exports: [
        DetailComponent
    ],
    imports: [
        CommonModule,
        ReferenceRoutingModule,
        MatCardModule,
        MatLineModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ReferenceModule { }
