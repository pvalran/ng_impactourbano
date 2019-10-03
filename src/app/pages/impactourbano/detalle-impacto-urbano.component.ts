import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detalle-impacto-urbano',
  templateUrl: './detalle-impacto-urbano.component.html',
  styleUrls: ['./detalle-impacto-urbano.component.scss']
})
export class DetalleImpactoUrbanoComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  navigateBack(){
    this.location.back();
  }

}
