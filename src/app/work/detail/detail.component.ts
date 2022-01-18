import { Component, OnInit } from '@angular/core';
import {RequestDetalleCredito} from '../../interfaces/request-detalle-credito';
import {ServicesDetalleCreditoService} from '../../services/services-detalle-credito.service';
import {Work} from '../../interfaces/work';
@Component({
  selector: 'app-work-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  ObjWork: Work = {
      idWork: 0,
      companyName: '',
      typeContract: -1,
      position: -1,
      specifyPosition: '',
      laboral_activity: -1,
      specifyLaboralActivity: '',
      address: '',
      external_number: '',
      interior_number: '',
      suburb: '',
      postalCode: '',
      municipality: '',
      city: '',
      state: '',
      officePhone: '',
      officePhoneExtension: '',
      nowWorkSeniority: '',
      previousWorkSeniority: '',
      creditApplication: ''
  };
  typeContrat: string[] = ['TEMPORAL', 'DEFINITIVO'];
  typeOcupacion: string[] = ['EMPLEADO', 'FUNCIONARIO', 'DIRECTIVO', 'SOCIO,DUEÑO,PROPIETARIO'
      , 'PROFESIONAL INDEPENDIENTE', 'PENSIONADO', 'JUBILADO', 'OTRO'];
  typeLaboral: string[] = ['COMERCIO', 'INDUSTRIA', 'SERVICIO', 'AGROPECUARIO', 'CONSTRUCCION'];
  typeStates: string [] = [
      "Aguascalientes",
      "Baja California",
      "Baja California Sur",
      "Campeche",
      "Coahuila",
      "Colima",
      "Chiapas",
      "Chihuahua",
      "Ciudad de México",
      "Durango",
      "Guanajuato",
      "Guerrero",
      "Hidalgo",
      "Jalisco",
      "México",
      "Michoacán",
      "Morelos",
      "Nayarit",
      "Nuevo León",
      "Oaxaca",
      "Puebla",
      "Querétaro",
      "Quintana Roo",
      "San Luis Potosí",
      "Sinaloa",
      "Sonora",
      "Tabasco",
      "Tamaulipas",
      "Tlaxcala",
      "Veracruz",
      "Yucatán",
      "Zacatecas"
  ];
  constructor( private srvDetalle: ServicesDetalleCreditoService) {
      if (srvDetalle.ObjDetalleCredito.work != null) {
          this.ObjWork = srvDetalle.ObjDetalleCredito.work;
          this.ObjWork.state = this.typeStates[this.ObjWork.state];
      }
  }

  ngOnInit(): void {
  }

}
