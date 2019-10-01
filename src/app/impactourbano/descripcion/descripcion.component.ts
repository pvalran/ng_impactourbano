import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, Params, Router} from "@angular/router";

@Component({
	selector: 'proyecto-descripcion',
	templateUrl: './descripcion.component.html',
	styleUrls: ['./descripcion.component.scss']
})
export class ProyectoDescripcionComponent implements OnInit {

	constructor(private location:Location,private route:ActivatedRoute) { }

	ngOnInit() {
	}

	navigateBack(){
		this.location.back()
	}
}
