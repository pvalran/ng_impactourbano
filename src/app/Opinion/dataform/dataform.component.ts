import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'opinion-dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.scss']
})
export class DataformComponent implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {
  }

  navigateBack(){
    this.location.back();
  }

}
