import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'filemanager-edicion',
  templateUrl: './edicion.component.html',
  styleUrls: ['./edicion.component.scss']
})
export class FileManagerEdicionComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<FileManagerEdicionComponent>,
              @Inject(MAT_DIALOG_DATA) data) {

  }

  ngOnInit() {
  }

  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
