import { Component, OnInit } from '@angular/core';
import {RequestDetalleCredito} from '../../interfaces/request-detalle-credito';
import {ServicesDetalleCreditoService} from '../../services/services-detalle-credito.service';
import {Dependent} from '../../interfaces/dependent';
export interface Section {
    name: string;
    updated: Date;
}


@Component({
  selector: 'app-dependent-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
    folders: Section[] = [
        {
            name: 'Photos',
            updated: new Date('1/1/16'),
        },
        {
            name: 'Recipes',
            updated: new Date('1/17/16'),
        },
        {
            name: 'Work',
            updated: new Date('1/28/16'),
        }
    ];
    notes: Section[] = [
        {
            name: 'Vacation Itinerary',
            updated: new Date('2/20/16'),
        },
        {
            name: 'Kitchen Remodel',
            updated: new Date('1/18/16'),
        }
    ];

    ObjDeps:Dependent[] = [];
    typeDependent:String[] = ["Esposo(a)","Hijo(a)","Primo(a)","Tio(a)","Otro (a)"];
    typeOccupation:String[] = ["Ama(o) de casa","Empleado(a)", "Estudiante"];


    constructor( private srvDetalle: ServicesDetalleCreditoService,) {
        this.ObjDeps = srvDetalle.ObjDetalleCredito.dependents;

    }

  ngOnInit(): void {
  }

}
