import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
	selector: 'app-detalle-medidas',
	templateUrl: './detalle-medidas.component.html',
	styleUrls: ['./detalle-medidas.component.scss']
})
export class DetalleMedidasComponent implements OnInit {

	constructor(private  location:Location) { }

	ngOnInit() {
	}

	navigateBack(){
		this.location.back();
	}
}
