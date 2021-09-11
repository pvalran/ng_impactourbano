import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpouseRoutingModule } from './spouse-routing.module';
import { DetailComponent } from './detail/detail.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';


@NgModule({
    declarations: [
        DetailComponent
    ],
    exports: [
        DetailComponent
    ],
    imports: [
        CommonModule,
        SpouseRoutingModule,
        MatCardModule,
        MatIconModule,
        FlexModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class SpouseModule { }
