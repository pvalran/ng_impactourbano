import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator ,MatSort, MatTableDataSource} from '@angular/material';
import { DataSource } from '@angular/cdk/table';

export interface PeriodicElement {
  dependencia: string;
  opinion: string;
  folio: string;
  fecha: string;
}

const ELEMENT_DATA: PeriodicElement[] =  [
  { dependencia: 'SEMOVI', opinion: 'SEMOVI', folio: 'ADFASDFASDF/ADSFDSAF/2019/0003',fecha:'2019/02/08' },
  { dependencia: 'SEMOVI', opinion: 'SEMOVI', folio: 'ADFASDFASDF/ADSFDSAF/2019/0005',fecha:'2019/03/18' },
  { dependencia: 'PROTECION', opinion: 'PROTECION', folio: 'ADFASDFASDF/ADSFDSAF/2019/0003',fecha:'2019/08/28'},
  { dependencia: 'PAOT', opinion: 'PAOT', folio: 'ADFASDFASDF/ADSFDSAF/2019/0020',fecha:'2019/10/23' },
  { dependencia: 'PAOT', opinion: 'PAOT', folio: 'ADFASDFASDF/ADSFDSAF/2019/0005',fecha:'2019/05/25' },
]

@Component({
  selector: 'opinion-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit {

   displayedColumns: string[] = ['dependencia', 'opinion', 'folio', 'fecha','opciones'];
   dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

   @ViewChild(MatPaginator) paginator: MatPaginator;

   ngOnInit() {
     this.dataSource.paginator = this.paginator;
   }

   applyFilter(filterValue: string) {
     this.dataSource.filter = filterValue.trim().toLowerCase();
   }

}
