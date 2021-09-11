import { Component, OnInit } from '@angular/core';
import {RequestDetalleCredito} from '../../interfaces/request-detalle-credito';
import {ServicesDetalleCreditoService} from '../../services/services-detalle-credito.service';
import {Spouse} from '../../interfaces/spouse';

@Component({
    selector: 'app-spouse-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
    ObjSpouse: Spouse = {
        idSpouse: 0,
        paternalLastName: '',
        maternalLastName: '',
        name: '',
        rfc: '',
        curp: '',
        oldPaternalLastName: '',
        oldMaternalLastName: '',
        oldName: '',
        nationality: '',
        speticNationality: '',
        gender: '',
        countryOfResidence: '',
        dateOfBirth: '',
        creditApplication: ''
    };
    nationality: string[] = ['Mexicana', 'Extranjera'];
    scholarship: string[] = [
        'PRIMERA',
        'SECUNDARIO',
        'PREPARATORIA',
        'TECNICA',
        'LICENCIATURA',
        'POSTGRADO',
        'SIN ESPECIFICAR'
    ];
    statecivil: string[] = ['SOLTERO', 'CASADO', 'OTRO'];
    maritalStatus: string[] = ['BIENES MANCOMUNADOS', 'SEPARADOS'];
    genero: string[] = ['MASCULINO', 'FEMENINO'];
    constructor( private srvDetalle: ServicesDetalleCreditoService,) {
        if (srvDetalle.ObjDetalleCredito.spouse != null) {
            this.ObjSpouse = srvDetalle.ObjDetalleCredito.spouse;
        }
    }

    ngOnInit(): void {
    }

}
