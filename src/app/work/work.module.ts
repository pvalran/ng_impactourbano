import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { WorkRoutingModule } from './work-routing.module';
import { DetailComponent } from './detail/detail.component';
import {MatCardModule} from '@angular/material/card';
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
        WorkRoutingModule,
        MatCardModule,
        FlexModule
    ],
    schemas:[ CUSTOM_ELEMENTS_SCHEMA]
})
export class WorkModule { }
