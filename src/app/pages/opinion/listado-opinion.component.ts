import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
    selector: 'app-listado-opinion',
    templateUrl: './listado-opinion.component.html',
    styleUrls: ['./listado-opinion.component.scss']
})
export class ListadoOpinionComponent implements OnInit {

    constructor(private location:Location) { }

    ngOnInit() {
    }

    navigateBack(){
        this.location.back();
    }
}