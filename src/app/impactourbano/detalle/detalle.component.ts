import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class ProyectoDetalleComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  navigateBack(){
    this.location.back();
  }

}
