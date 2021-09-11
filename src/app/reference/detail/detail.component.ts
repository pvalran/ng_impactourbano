import { Component, OnInit } from '@angular/core';
import {Section} from '../../dependent/detail/detail.component';
import {ServicesDetalleCreditoService} from '../../services/services-detalle-credito.service';
import {References} from '../../interfaces/references';

export interface SSection {
    name: string;
    updated: Date;
}


@Component({
    selector: 'app-reference-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
    ObjRef:References[] = [];
    typeReference:String[] = ["FAMILIAR","NO FAMILIAR"];
    constructor( private srvDetalle: ServicesDetalleCreditoService,) {
        this.ObjRef =  srvDetalle.ObjDetalleCredito.references;
    }

    ngOnInit(): void {
    }

}
