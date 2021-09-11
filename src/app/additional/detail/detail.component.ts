import { Component, OnInit } from '@angular/core';
import {RequestDetalleCredito} from '../../interfaces/request-detalle-credito';
import {ServicesDetalleCreditoService} from '../../services/services-detalle-credito.service';
import {Additional} from '../../interfaces/additional';

@Component({
    selector: 'app-additional-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
    country: string[] = ['MEXICO', 'EXTRANJERO'];
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


    catNationality = this.nationality[0];
    ObjAdd: Additional = {
        idAdditionalInformaction:0,
        countryOfBirth: -1,
        countryOfResidence: -1,
        nationality: null,
        civilState: -1,
        maritalStatus: '',
        numberImss: '',
        scholarship: '',
        phone: '',
        mobile: '',
        otherPhone: '',
        nowResidenceSeniority: '',
        previousResidenceSeniority: '',
        address: '',
        external_number: '',
        interior_number: '',
        suburb: '',
        municipality: '',
        city: '',
        state: '',
        postal_code: '',
        country: '',
        creaditApplication: ''
    };
    constructor( private srvDetalle: ServicesDetalleCreditoService) {
        if (srvDetalle.ObjDetalleCredito.additionalies != null) {
            this.ObjAdd = srvDetalle.ObjDetalleCredito.additionalies;
        }

        if (this.ObjAdd.nationality == null) {
            this.catNationality = '';
        } else {
            this.catNationality = this.nationality[this.ObjAdd.nationality];
        }
    }


    ngOnInit(): void {
    }

}
