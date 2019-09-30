import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, Params, Router} from "@angular/router";
import { impactourbanoservice } from "../../services/impactourbano.service";

@Component({
    selector: 'proyecto-dataform',
    templateUrl: './dataform.component.html',
    styleUrls: ['./dataform.component.scss']
})

export class ProyectoDataformComponent implements OnInit {
    private ImpactoUrbano;
    /**Inserar el dataservice activeroute params**/
    constructor(private location:Location,private route:ActivatedRoute) { }

    ngOnInit() {
        const ImpactoUrbanoID = this.route.snapshot.params["id"];
        console.log(ImpactoUrbanoID);
        this.getDetails(ImpactoUrbanoID);
    }

    navigateBack(){
        this.location.back()
    }

    getDetails(id:string){

    }
}
