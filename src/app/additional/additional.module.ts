import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdditionalRoutingModule } from './additional-routing.module';
import { DetailComponent } from './detail/detail.component';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from "@angular/material/input";


@NgModule({
    declarations: [
        DetailComponent
    ],
    exports: [
        DetailComponent
    ],
    imports: [
        CommonModule,
        AdditionalRoutingModule,
        FlexLayoutModule,
        MatCardModule,

        MatInputModule
    ],
    schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AdditionalModule { }
