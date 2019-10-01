import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-listado-impacto-urbano',
    templateUrl: './listado-impacto-urbano.component.html',
    styleUrls: ['./listado-impacto-urbano.component.scss']
})
export class ListadoImpactoUrbanoComponent implements OnInit {

    constructor(private location:Location) {}

    ngOnInit() {

    }

    navigateBack(){
        this.location.back();
    }
}
