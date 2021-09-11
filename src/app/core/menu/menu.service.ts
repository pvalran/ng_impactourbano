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
		state: 'dashboard',
		name: 'Dashboard',
		type: 'link',
		icon: 'dashboard'
	},{
		state: 'enrolments',
		name: 'Enrolamientos',
		type: 'sub',
		icon: 'person',
		children: [
			{ state: 'list', name: 'listado', icon: 'list' }
		]
	},{
		state: 'administration',
		name: 'Administración',
		type: 'sub',
		icon: 'supervisor_account',
		children: [
			{ state: 'list', name: 'Usuarios', icon: 'supervisor_account' },
			{ state: 'leaflet', name: 'Prospectos', icon: 'list' }
		]
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
