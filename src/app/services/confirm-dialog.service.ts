import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { DialogAlertComponent } from '../dialogs/dialog-alert/dialog-alert.component';
import {MatDialog, MatDialogRef} from "@angular/material/dialog";

@Injectable({
  providedIn: 'root'
})
export class ConfirmDialogService {
  dialogRef: MatDialogRef<DialogAlertComponent>;
  constructor(private dialog: MatDialog) { }

  public open(options) {
    this.dialogRef = this.dialog.open(DialogAlertComponent, {
      data: {
        title: options.title,
        message: options.message,
        cancelText: options.cancelText,
        confirmText: options.confirmText
      }
    });
  }

  public confirmed(): Observable<any> {
    return this.dialogRef.afterClosed().pipe(take(1), map(res => {
          return res;
        }
    ));
  }
}
