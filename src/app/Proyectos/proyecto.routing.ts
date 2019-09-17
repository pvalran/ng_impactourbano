import { Routes } from '@angular/router';

import { ProyectoDataformComponent } from './dataform/dataform.component';
import { ProyectoListadoComponent } from './listado/listado.component';
import { ProyectoDetalleComponent } from './detalle/detalle.component';

export const AppsRoutes: Routes = [
  {
    path: 'proyecto',
    children: [
      {
        path: 'registro',
        component: ProyectoDataformComponent
      },
      {
        path: 'listado',
        component: ProyectoListadoComponent
      },
      {
	path: 'detalle',
	component: ProyectoDetalleComponent
      }
      
    ]
  }
];
