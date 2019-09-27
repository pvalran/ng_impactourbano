import { Routes } from '@angular/router';

import { MedidasDataformComponent } from './dataform/dataform.component';
import { MedidasListadoComponent } from './listado/listado.component';
import { MedidasSeguimientoComponent} from './seguimiento/seguimiento.component';

export const AppsRoutes: Routes = [
  {
    path: 'medida',
    children: [
      {
        path: 'registro',
        component: MedidasDataformComponent
      }, {
        path: 'listado',
        component: MedidasListadoComponent
      }, {
        path: 'seguimiento',
        component: MedidasSeguimientoComponent
      }
    ]
  }
];
