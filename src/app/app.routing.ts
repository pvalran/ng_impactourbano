import { Routes } from '@angular/router';

import { AdminLayoutComponent, AuthLayoutComponent, LoginComponent } from './core';

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
            },
            {
                path:'',
                loadChildren: './Proyectos/proyecto.module#ProyectoModule'
            },
            {
                path: '',
                loadChildren: './Opinion/opinion.module#OpinionModule'
            },
            {
                path: '',
                loadChildren: './Medidas/medidas.module#MedidasModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'session/404'
    }
];
