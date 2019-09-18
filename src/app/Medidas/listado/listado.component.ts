import {Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

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
      {descripcion:'Medidas uno'},
      {descripcion:'Medidas dos'},
      {descripcion:'Medidas tres'},
      {descripcion:'Medidas cuatro'},
      {descripcion:'Medidas cinco'}
    ]
  },
  {
    nombre: 'SACMEX',
    opinion: '5/15',
    porcentaje: '30',
    medidas: [
      {descripcion:'Medidas uno'},
      {descripcion:'Medidas dos'},
      {descripcion:'Medidas tres'},
      {descripcion:'Medidas cuatro'},
      {descripcion:'Medidas cinco'}
    ]

  },
  {
    nombre: 'SPC',
    opinion: '1/10',
    porcentaje: '10',
    medidas: [
      {descripcion:"Medidas uno"},
      {descripcion:"Medidas dos"},
      {descripcion:"Medidas tres"},
      {descripcion:"Medidas cuatro"},
      {descripcion:"Medidas cinco"}
    ]

  },
  {
    nombre: 'SEDUVI',
    opinion: '4/5',
    porcentaje: '90',
    medidas: [
      {descripcion:"Medidas uno"},
      {descripcion:"Medidas dos"},
      {descripcion:"Medidas tres"},
      {descripcion:"Medidas cuatro"},
      {descripcion:"Medidas cinco"}
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
   constructor() { }

   ngOnInit() {
   }
}
