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
        path: 'opinion',
        loadChildren: './Opinion/opinion.module#OpinionModule'
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'session/404'
  }
];
