import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
	selector: 'app-edicion-opinion',
	templateUrl: './edicion-opinion.component.html',
	styleUrls: ['./edicion-opinion.component.scss']
})
export class EdicionOpinionComponent implements OnInit {

	constructor(private location:Location) { }

	ngOnInit() {
	}

	navigateBack(){
		this.location.back();
	}
}
