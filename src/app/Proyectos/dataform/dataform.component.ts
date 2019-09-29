import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'proyecto-dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.scss']
})
export class ProyectoDataformComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  navigateBack(){
    this.location.back()
  }

}
