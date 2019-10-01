import { Routes } from '@angular/router';

import { DetalleMedidasComponent } from './detalle-medidas.component';
import { EdicionMedidasComponent } from './edicion-medidas.component';
import { ListadoMedidasComponent } from './listado-medidas.component';
import { SeguimientoMedidasComponent } from './seguimiento-medidas.component';

export const AppsRoutes: Routes = [
	{
		path: 'medida',
		children: [
			{
				path: 'registro',
				component: EdicionMedidasComponent
			}, {
				path: 'listado',
				component: ListadoMedidasComponent
			}, {
				path: 'seguimiento',
				component: SeguimientoMedidasComponent
			}
		]
	}
];
