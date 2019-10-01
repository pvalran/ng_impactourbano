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
                loadChildren: './pages/impactourbano/impactourbano.module#ImpactourbanoModule'
            },
            {
                path: '',
                loadChildren: './pages/opinion/opinion.module#OpinionModule'
            },
            {
                path: '',
                loadChildren: './pages/medidas/medidas.module#MedidasModule'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'session/404'
    }
];
