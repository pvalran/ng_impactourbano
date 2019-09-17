import { Routes } from '@angular/router';

import { AdminLayoutComponent, AuthLayoutComponent } from './core';

export const AppRoutes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'apps',
        loadChildren: './apps/apps.module#AppsModule'
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
