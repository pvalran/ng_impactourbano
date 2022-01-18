import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthService} from "../../services/auth.service";

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

const ITEMSADMIN = [
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
			{ state: 'branch', name: 'Sucursales', icon: 'supervisor_account' }
		]
	}
];

const ITEMPROMOTOR = [
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
			{ state: 'leaflet', name: 'Prospectos', icon: 'list' }
		]
	}
];

const ITEMCONSULTA = [
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
	}
];

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
	userCurrent: any;
	constructor(private  http: HttpClient,
				private authUser: AuthService) {
		this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser())) ;
	}
	getAll(): Menu[] {
		switch (this.userCurrent.profileId) {
			case "1":
				return ITEMSADMIN;
			case "2":
				return ITEMPROMOTOR;
			case "3":
				return ITEMCONSULTA;
			default:
				return MENUITEMS;
		}
	}
	add(menu) {
		MENUITEMS.push(menu);
	}
}
