import { Routes } from '@angular/router';

import { DataformComponent } from './dataform/dataform.component';
import { ListadoComponent } from './listado/listado.component';


export const AppsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'registro',
        component: DataformComponent
      },
      {
        path: 'listado',
        component: ListadoComponent
      }
    ]
  }
];
