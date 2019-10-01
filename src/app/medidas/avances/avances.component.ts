import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import DecoupledEditor from '@ckeditor/ckeditor5-build-decoupled-document';
import { Router } from '@angular/router';
export interface trimestre {
    value: number,
    display: string
}

@Component({
    selector: 'medidas-avances',
    templateUrl: './avances.component.html',
    styleUrls: ['./avances.component.scss']
})
export class MedidasAvancesComponent implements OnInit {
    public Editor = DecoupledEditor;
    public trimestres:trimestre[];
    public onReady(editor) {
        editor.ui.getEditableElement().parentElement.insertBefore(
            editor.ui.view.toolbar.element,
            editor.ui.getEditableElement()
        );
    }

    constructor(private dialogRef: MatDialogRef<MedidasAvancesComponent>,
                @Inject(MAT_DIALOG_DATA) data) {

    }

    ngOnInit() {
        this.trimestres =[
            { value:1, display: "ENE-MAR/09" },
            { value:2, display: "ABR-JUN/09" },
            { value:3, display: "JUL-SEP/09" },
            { value:4, display: "OCT-DIC/09" }
        ]
    }

    save() {
        this.dialogRef.close();
    }

    close() {
        this.dialogRef.close();
    }

    
}
