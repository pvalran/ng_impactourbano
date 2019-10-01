import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-detalle-opinion',
	templateUrl: './detalle-opinion.component.html',
	styleUrls: ['./detalle-opinion.component.scss']
})
export class DetalleOpinionComponent implements OnInit {
	oficiorespuesta = false;
	constructor(private location:Location) { }

	ngOnInit() {
	}

	navigateBack(){
		this.location.back();
	}

	changeOpinionOficioRespuesta (){
		this.oficiorespuesta = !this.oficiorespuesta;
	}
}
