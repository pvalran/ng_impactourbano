import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { DependentRoutingModule } from './dependent-routing.module';
import { DetailComponent } from './detail/detail.component';
import {MatCardModule} from '@angular/material/card';
import {FlexModule} from '@angular/flex-layout';
import {MatIconModule} from '@angular/material/icon';
import {MatLineModule} from '@angular/material/core';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
    declarations: [
        DetailComponent
    ],
    exports: [
        DetailComponent
    ],
    imports: [
        CommonModule,
        DependentRoutingModule,
        MatCardModule,
        FlexModule,
        MatIconModule,
        MatLineModule,
        MatDividerModule
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DependentModule { }
