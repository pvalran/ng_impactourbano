import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-edicion-medidas',
	templateUrl: './edicion-medidas.component.html',
	styleUrls: ['./edicion-medidas.component.scss']
})
export class EdicionMedidasComponent implements OnInit {

	constructor(private location: Location) {
	}

	ngOnInit() {
	}

	navigateBack() {
		this.location.back();
	}
}