import {Component, HostListener, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
    selector: 'app-dialog-alert',
    templateUrl: './dialog-alert.component.html',
    styleUrls: ['./dialog-alert.component.scss']
})
export class DialogAlertComponent implements OnInit {
    btnCancel=false;
    constructor(@Inject(MAT_DIALOG_DATA) public data: {
        cancelText: string,
        confirmText: string,
        message: string,
        title: string
    },private mdDialogRef: MatDialogRef<DialogAlertComponent>) {
        if (data.cancelText != null){
            this.btnCancel = true;
        }
    }

    ngOnInit() {
    }

    public cancel() {
        this.close(false);
    }
    public close(value) {
        this.mdDialogRef.close(value);
    }
    public confirm() {
        this.close(true);
    }
    @HostListener("keydown.esc")
    public onEsc() {
        this.close(false);
    }
}
