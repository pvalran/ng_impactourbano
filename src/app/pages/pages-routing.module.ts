import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EnrolmentsComponent} from "./enrolments/enrolments.component";
import {AdministrationComponent} from "./administration/administration.component";
import {RestorepasswordComponent} from "./auth/restorepassword/restorepassword.component";
import {LeafletComponent} from "./leaflet/leaflet.component";
import {AdministradorGuard} from "../guard/administrador.guard";
import {PromotorGuard} from "../guard/promotor.guard";
import {ConsultaGuard} from "../guard/consulta.guard";
import {SyncGuard} from "../guard/sync.guard";
import {BranchofficeComponent} from "./branchoffice/branchoffice.component";

export const AppsRoutes: Routes = [
  {
    path: 'enrolments',
    children: [{
        path: 'list',
        component: EnrolmentsComponent,
        canActivate: [SyncGuard]
    }]
  },
  {
    path: 'administration',
    children: [{
      path: 'list',
      component: AdministrationComponent,
      canActivate: [AdministradorGuard]
    },{
      path: 'leaflet',
      component: LeafletComponent,
      canActivate: [PromotorGuard]
    },{
      path: 'branch',
      component: BranchofficeComponent,
      canActivate: [AdministradorGuard]
    }]
  }
];

