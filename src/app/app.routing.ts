import { Routes } from '@angular/router';

import { AdminLayoutComponent, AuthLayoutComponent, LoginComponent } from './core';
import {RestorepasswordComponent} from "./pages/auth/restorepassword/restorepassword.component";
import {AdministrationComponent} from "./pages/administration/administration.component";
import {AdministradorGuard} from "./guard/administrador.guard";
import {PromotorGuard} from "./guard/promotor.guard";
import {ConsultaGuard} from "./guard/consulta.guard";
import {ChangePasswordComponent} from "./pages/auth/change-password/change-password.component";
import {TodosGuard} from "./guard/todos.guard";

export const AppRoutes: Routes = [
    {
        path: '',
        component: LoginComponent,
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [{
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
        },{
            path: '',
            loadChildren: './pages/pages.module#PagesModule'
        }]
    },
    {

        path: 'restorechange',
        component: RestorepasswordComponent

    },
    {

        path: 'passwordchange',
        component: ChangePasswordComponent
    },
    {
        path: '**',
        redirectTo: 'session/404'
    }
];
