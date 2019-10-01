import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {ActivatedRoute, Params, Router} from "@angular/router";
import { impactourbanoservice } from "../../services/impactourbano.service";

@Component({
  selector: 'app-edicion-impacto-urbano',
  templateUrl: './edicion-impacto-urbano.component.html',
  styleUrls: ['./edicion-impacto-urbano.component.scss']
})
export class EdicionImpactoUrbanoComponent implements OnInit {

  constructor(private location:Location,private route:ActivatedRoute) { }

  ngOnInit() {
  }

  navigateBack(){
    this.location.back()
  }

  getDetails(id:string){

  }

}
