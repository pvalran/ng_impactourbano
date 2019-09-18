import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator ,MatSort, MatTableDataSource} from '@angular/material';
import { DataSource } from '@angular/cdk/table';

export interface PeriodicElement {
  nombre: string;
  opinion: string;
  estado: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { nombre: 'Proyecto 1', opinion: '3/5', estado: 'En proceso' },
  { nombre: 'Proyecto 2', opinion: '2/5', estado: 'En proceso' },
  { nombre: 'Proyecto 3', opinion: '4/5', estado: 'En proceso' },
  { nombre: 'Proyecto 4', opinion: '1/5', estado: 'En proceso' },
  { nombre: 'Proyecto 5', opinion: '4/5', estado: 'Terminado' }
];

@Component({
  selector: 'proyecto-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})

export class ProyectoListadoComponent implements OnInit {
  displayedColumns: string[] = ['nombre', 'opinion', 'estado', 'opciones'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
