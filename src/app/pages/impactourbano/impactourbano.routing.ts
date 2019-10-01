import { Routes } from '@angular/router';

import { EdicionImpactoUrbanoComponent } from './edicion-impacto-urbano.component';
import { ListadoImpactoUrbanoComponent } from './listado-impacto-urbano.component';
import { DetalleImpactoUrbanoComponent } from './detalle-impacto-urbano.component';

export const AppsRoutes: Routes = [
	{
		path: 'proyecto',
		children: [
			{
				path: 'registro',
				component: EdicionImpactoUrbanoComponent
			},
			{
				path: 'listado',
				component: ListadoImpactoUrbanoComponent
			},
			{
				path: 'detalle',
				component: DetalleImpactoUrbanoComponent
			}

		]
	}
];
