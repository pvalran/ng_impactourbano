import { Injectable } from '@angular/core';

export interface BadgeItem {
	type: string;
	value: string;
}

export interface ChildrenItems {
	state: string;
	name: string;
	type?: string;
}

export interface Menu {
	state: string;
	name: string;
	type: string;
	icon: string;
	badge?: BadgeItem[];
	children?: ChildrenItems[];
}

const MENUITEMS = [
	{
		state: '/',
		name: 'Inicio',
		type: 'link',
		icon: 'dashboard'
	},{
		state: 'proyecto',
		name: 'Proyecto',
		type: 'sub',
		icon: 'apps',
		children: [
			{ state: 'registro', name: 'registro' },
			{ state: 'listado', name: 'listado', icon: 'list' }
		]
	},{
		state: 'opinion',
		name: 'Opinion',
		type: 'sub',
		icon: 'apps',
		children: [
			{ state: 'registro', name: 'registro' },
			{ state: 'listado', name: 'listado', icon: 'list' }
		]
	},{
		state: 'medida',
		name: 'Medida',
		type: 'sub',
		icon: 'apps',
		children: [
			{ state: 'registro', name: 'registro' },
			{
				state: 'listado',
				name: 'listado',
				redirectTo: '/proyecto/listado',
				pathMatch: 'full',
				icon: 'list'
			}
		]
	},{
		state: 'http://primer.nyasha.me/docs',
		name: 'Documentación',
		type: 'extTabLink',
		icon: 'local_library'
	}
];

@Injectable()
export class MenuService {
	getAll(): Menu[] {
		return MENUITEMS;
	}

	add(menu) {
		MENUITEMS.push(menu);
	}
}
