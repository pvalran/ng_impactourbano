import {Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { Location } from '@angular/common';

export interface Medida {
	descripcion: string;
}
export interface PeriodicElement {
	nombre: string;
	opinion: string;
	porcentaje: string;
	medidas: Medida[];
}
const ELEMENT_DATA: PeriodicElement[] =  [
	{
		nombre: 'ALCALDÍA',
		opinion: '10/20',
		porcentaje: '50',
		medidas: [
			{descripcion:'Categoria uno'},
			{descripcion:'Categoria dos'},
			{descripcion:'Categoria tres'},
			{descripcion:'Categoria cuatro'},
			{descripcion:'Categoria cinco'}
		]
	},
	{
		nombre: 'SACMEX',
		opinion: '5/15',
		porcentaje: '30',
		medidas: [
			{descripcion:'Categoria uno'},
			{descripcion:'Categoria dos'},
			{descripcion:'Categoria tres'},
			{descripcion:'Categoria cuatro'},
			{descripcion:'Categoria cinco'}
		]

	},
	{
		nombre: 'SPC',
		opinion: '1/10',
		porcentaje: '10',
		medidas: [
			{descripcion:"Categoria uno"},
			{descripcion:"Categoria dos"},
			{descripcion:"Categoria tres"},
			{descripcion:"Categoria cuatro"},
			{descripcion:"Categoria cinco"}
		]

	},
	{
		nombre: 'SEDUVI',
		opinion: '4/5',
		porcentaje: '90',
		medidas: [
			{descripcion:"Categoria uno"},
			{descripcion:"Categoria dos"},
			{descripcion:"Categoria tres"},
			{descripcion:"Categoria cuatro"},
			{descripcion:"Categoria cinco"}
		]
	},
];

@Component({
	selector: 'medidas-listado',
	templateUrl: './listado.component.html',
	styleUrls: ['./listado.component.scss'],
	animations: [
		trigger('detailExpand', [
			state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
			state('expanded', style({height: '*'})),
			transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
		]),
	],
})
export class MedidasListadoComponent implements OnInit {
	dataSource = ELEMENT_DATA;
	columnsToDisplay = ['nombre', 'opinion', 'porcentaje'];
	expandedElement: PeriodicElement;

	constructor(private location: Location) { }

	ngOnInit() {
	}

	navigateBack() {
		this.location.back();
	}
}
