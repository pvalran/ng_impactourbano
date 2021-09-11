import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogService } from '../services/confirm-dialog.service';
import { LayerDocumentComponent  } from "./layer-document/layer-document.component";
import { LayerBiometricComponent } from './layer-biometric/layer-biometric.component';
import { LayerGovernmentComponent } from './layer-government/layer-government.component';
import { DialogDetailComponent } from "./dialog-detail/dialog-detail.component";
import {MatDialogModule} from "@angular/material/dialog";
import {MatTabsModule} from "@angular/material/tabs";
import {AdditionalModule} from "../additional/additional.module";
import {DependentModule} from "../dependent/dependent.module";
import {SpouseModule} from "../spouse/spouse.module";
import {WorkModule} from "../work/work.module";
import {ReferenceModule} from "../reference/reference.module";
import {DocumentModule} from "../document/document.module";
import {ViewComponent} from "./view/view.component";
import {PdfComponent} from "./pdf/pdf.component";
import { DialogAlertComponent } from './dialog-alert/dialog-alert.component';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatTabsModule,
    AdditionalModule,
    DependentModule,
    SpouseModule,
    WorkModule,
    ReferenceModule,
    DocumentModule,
    MatButtonModule
  ],
  exports:[
    LayerDocumentComponent,
    LayerBiometricComponent,
    LayerGovernmentComponent,
      ViewComponent,
      PdfComponent

  ],
  entryComponents: [
    LayerDocumentComponent,
    LayerBiometricComponent,
    LayerGovernmentComponent,
    DialogDetailComponent,
    ViewComponent,
    PdfComponent,
    DialogAlertComponent
  ],
  declarations: [
      LayerDocumentComponent,
    LayerBiometricComponent,
    LayerGovernmentComponent,
    DialogDetailComponent,
    ViewComponent,
    PdfComponent,
    DialogAlertComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [ConfirmDialogService]
})
export class DialogsModule { }
