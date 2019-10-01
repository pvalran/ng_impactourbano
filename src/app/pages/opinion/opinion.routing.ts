import { Routes } from '@angular/router';

import { EdicionOpinionComponent } from './edicion-opinion.component';
import { ListadoOpinionComponent } from './listado-opinion.component';
import { DetalleOpinionComponent } from './detalle-opinion.component';


export const AppsRoutes: Routes = [
	{
		path: 'opinion',
		children: [
			{
				path: 'registro',
				component: EdicionOpinionComponent
			},
			{
				path: 'listado',
				component: ListadoOpinionComponent
			},
			{
				path: 'detalle',
				component: DetalleOpinionComponent
			}
		]
	}
];
