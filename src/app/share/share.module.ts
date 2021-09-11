import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoadingComponent} from "./loading/loading.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

@NgModule({
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports:[
      LoadingComponent
  ],
  declarations: [
    LoadingComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class ShareModule { }
