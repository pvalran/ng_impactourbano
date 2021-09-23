import {Component, Inject, OnInit} from '@angular/core';
import {Branchoffice} from "../../../interfaces/branchoffice";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DomSanitizer} from "@angular/platform-browser";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ConfirmDialogService} from "../../../services/confirm-dialog.service";
import {AuthService} from "../../../services/auth.service";
import {DOCUMENT} from "@angular/common";
import {IObjRequest} from "../../../interfaces/iobj-request";
import {environment} from "../../../../environments/environment";

@Component({
  selector: 'app-edition-branch',
  templateUrl: './edition-branch.component.html',
  styleUrls: ['./edition-branch.component.scss']
})
export class EditionBranchComponent implements OnInit {
  loading = true;
  branchVisible: boolean;
  ObjBranch: Branchoffice = {
      id:null,
      numberBranch:'0',
      name:'',
      city:'',
      state:null,
      status_flag:1
  };
  stateSelected = 1 + "";





  branchId: number;
  userCurrent: any;
  options = {
    title: 'ATENCION',
    message: '',
    cancelText: null,
    confirmText: 'CERRAR'
  };

  constructor(   private router: Router,
                 private httpClient: HttpClient,
                 private sanitizer: DomSanitizer,
                 private dialogRef: MatDialogRef<EditionBranchComponent>,
                 private dialogService: ConfirmDialogService,
                 private authUser: AuthService,
                 @Inject(MAT_DIALOG_DATA) data:any,
                 @Inject(DOCUMENT) private document: Document) {
    this.branchId = data.model.dataModal;
    if (this.branchId > 0) {
      this.branchVisible = false;
    } else {
      this.branchVisible = true;
    }

    this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser())) ;
  }

  ngOnInit() {
    this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser()));
    if ((this.branchId > 0) || (this.branchId != null)) {
      this.httpClient.get<IObjRequest>(environment.apiUrl+'/forms/branchoffice/'+this.branchId).subscribe(
          (response) => {
            if(response.result){
              if (response.data != null) {
                this.ObjBranch = response.data;
                this.ObjBranch.state = response.data.state + "";
                this.stateSelected = response.data.state + "";
              }
            } else {

            }
          },
          (error) => {

          }
      );
    }
  }

  registar(){


    if (this.ObjBranch.name == '' || this.ObjBranch.name == null) {
      this.options.message = "El nombre de la sucursal no puede ser vacio o nulo";
      this.dialogService.open(this.options);
      return false;
    }
    if (this.ObjBranch.city == '' || this.ObjBranch.city == null) {
      this.options.message = "El nombre de la ciudad no puede ser vacio o nulo";
      this.dialogService.open(this.options);
      return false;
    }
    let ObjBranch = {
        name: this.ObjBranch.name,
        city: this.ObjBranch.city,
        state: this.ObjBranch.state
    }

    this.loading = false;
    this.httpClient.post<IObjRequest>(environment.apiUrl+'/forms/branchoffice',ObjBranch).subscribe(
        (response) => {
          if(response.result){
            this.loading = true;
            this.document.location.reload();
          } else {
            this.options.message = response.message;
            this.dialogService.open(this.options);
            this.loading = true;
            //this.router.navigate(['administration/list']);
          }
        },
        (error) => {
          this.options.message = "Error en el registro del usuario";
          this.dialogService.open(this.options);
          this.loading = true;
          //this.router.navigate(['administration/list']);
        }
    );
  }

  update(){
    if (this.ObjBranch.name == '' || this.ObjBranch.name == null) {
      this.options.message = "El nombre de la sucursal no puede ser vacio o nulo";
      this.dialogService.open(this.options);
      return false;
    }
    if (this.ObjBranch.city == '' || this.ObjBranch.city == null) {
      this.options.message = "El nombre de la ciudad no puede ser vacio o nulo";
      this.dialogService.open(this.options);
      return false;
    }

    this.loading = false;
    this.httpClient.put<IObjRequest>(environment.apiUrl+'/forms/branchoffice/'+this.branchId,this.ObjBranch).subscribe(
        (response) => {
          if(response.result){
            this.document.location.reload();
            this.loading = true;
          } else {
            this.options.message = response.message;
            this.dialogService.open(this.options);
            this.loading = true;
          }
        },
        (error) => {
          this.options.message = "Error en el registro del usuario";
          this.dialogService.open(this.options);
          this.loading = true;
        }
    );
  }


}
