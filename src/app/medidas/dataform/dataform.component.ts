import { Component, OnInit, OnChanges } from '@angular/core';
import * as DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { MatDialog,MatDialogConfig} from "@angular/material/dialog";
import { Location } from '@angular/common';
import {FileManagerEdicionComponent} from "../../filemanager/edicion/edicion.component";

export interface categoria {
  value: number,
  display: string,

};

export interface dependencia {
    value: number,
    display: string
};

@Component({
  selector: 'medidas-dataform',
  templateUrl: './dataform.component.html',
  styleUrls: ['./dataform.component.scss']
})
export class MedidasDataformComponent implements OnInit {
  public Editor = DecoupledEditor;
  public dependencias: dependencia[];
  public categorias: categoria[];

  public onReady(editor) {
      const htmlEditor = editor.ui.getEditableElement();
      htmlEditor.parentElement.insertBefore(
        editor.ui.view.toolbar.element,
        editor.ui.getEditableElement()
      );

      htmlEditor.setA
      console.log(htmlEditor);
  }

  constructor(private location: Location,
              private dialog:MatDialog) {
  }

  /* Detecta los cambios en  los input de entradas del componente
  ngOnChanges() {

  }
  */
    ngOnInit() {
        this.categorias = [
            { value: 1, display: "Categoria 1"},
            { value: 2, display: "Categoria 2"},
            { value: 3, display: "Categoria 3"},
            { value: 4, display: "Categoria 4"},
            { value: 5, display: "Categoria 5"}
        ];

        this.dependencias = [
            { value: 1, display: "ALCALDIA"},
            { value: 2, display: "SACMEX"},
            { value: 3, display: "SPC"},
            { value: 4, display: "SEMOVI"},
            { value: 5, display: "PAOT"}
        ];
    }

    navigateBack() {
      this.location.back();
    }

    openDialog(){
        const dialogConfig = new MatDialogConfig();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        this.dialog.open(FileManagerEdicionComponent,dialogConfig);
    }

    /*
    * Se ejecuta
    *
    *
    * ngDoCheck (){
    *
    * }
    *
    * Se ejecura despues de contenido inicia
    * ngAfterContentInit(){
    *
    * }
    *
    * Se ejecuta despues de la verificacion del componente
    * ngAfterContentChecked(){
    *
    * }
    *
    * Se ejectura despues se ha iniciado, cambio en la vista
    * ngAfterViewInit(){
    *
    * }
    *
    *
    *
    *
    */
}
