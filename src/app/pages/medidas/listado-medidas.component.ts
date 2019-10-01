import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-listado-medidas',
	templateUrl: './listado-medidas.component.html',
	styleUrls: ['./listado-medidas.component.scss']
})
export class ListadoMedidasComponent implements OnInit {

	constructor(private location: Location) { }

	ngOnInit() {
	}

	navigateBack() {
		this.location.back();
	}
}