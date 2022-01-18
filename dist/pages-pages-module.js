(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/guard/administrador.guard.ts":
/*!**********************************************!*\
  !*** ./src/app/guard/administrador.guard.ts ***!
  \**********************************************/
/*! exports provided: AdministradorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministradorGuard", function() { return AdministradorGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdministradorGuard = /** @class */ (function () {
    function AdministradorGuard(router, authUser) {
        this.router = router;
        this.authUser = authUser;
    }
    AdministradorGuard.prototype.canActivate = function (next, state) {
        if (this.authUser.getCurrentUser() == null) {
            this.router.navigate(["/"]);
        }
        var userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser()));
        if (userCurrent.profileId == "1") {
            return true;
        }
        else {
            return false;
        }
    };
    AdministradorGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AdministradorGuard);
    return AdministradorGuard;
}());



/***/ }),

/***/ "./src/app/guard/promotor.guard.ts":
/*!*****************************************!*\
  !*** ./src/app/guard/promotor.guard.ts ***!
  \*****************************************/
/*! exports provided: PromotorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotorGuard", function() { return PromotorGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PromotorGuard = /** @class */ (function () {
    function PromotorGuard(router, authUser) {
        this.router = router;
        this.authUser = authUser;
    }
    PromotorGuard.prototype.canActivate = function (next, state) {
        if (this.authUser.getCurrentUser() == null) {
            this.router.navigate(["/"]);
        }
        var userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser()));
        if (userCurrent.profileId == "2") {
            return true;
        }
        else {
            return false;
        }
    };
    PromotorGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], PromotorGuard);
    return PromotorGuard;
}());



/***/ }),

/***/ "./src/app/guard/sync.guard.ts":
/*!*************************************!*\
  !*** ./src/app/guard/sync.guard.ts ***!
  \*************************************/
/*! exports provided: SyncGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncGuard", function() { return SyncGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SyncGuard = /** @class */ (function () {
    function SyncGuard(router, authUser) {
        this.router = router;
        this.authUser = authUser;
    }
    SyncGuard.prototype.canActivate = function (next, state) {
        if (this.authUser.getCurrentUser() == null) {
            this.router.navigate(["/"]);
        }
        var userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser()));
        if ((userCurrent.profileId == "1") || (userCurrent.profileId == "2") || (userCurrent.profileId == "3")) {
            return true;
        }
        else {
            return false;
        }
    };
    SyncGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SyncGuard);
    return SyncGuard;
}());



/***/ }),

/***/ "./src/app/pages/administration/administration.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/administration/administration.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Administración/Usuarios</h1>\n<div fxLayout=\"row wrap\">\n  <div class=\"layout-content\">\n    <div fxFlex=\"100\" class=\"ui-g dashboard\">\n      <div fxFlex=\"100\" class=\"card\">\n        <div  class=\"flex-container\"\n              fxLayout=\"row\"\n              fxLayoutAlign=\"space-between center\">\n          <button mat-flat-button (click)=\"newUser()\"><mat-icon>add_circle</mat-icon>Nuevo</button>\n          &nbsp;\n          <mat-form-field>\n            <input matInput placeholder=\"Buscar\">\n          </mat-form-field>\n\n        </div>\n        <table mat-table #table [dataSource]=\"dataSource\" matSort >\n          <ng-container matColumnDef=\"idUser\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.idUser}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Nombres</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"paternalLastName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Apellido paterno</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.paternalLastName}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"motherLastName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Apellido materno</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.motherLastName}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"email\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"status_flag\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Activo</th>\n            <td mat-cell *matCellDef=\"let element\"> {{ (element.status_flag == 1)? 'SI' : 'NO'}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"opciones\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let element\" fxLayoutAlign=\"center\">\n              <button  (click)=\"editUser(element.idUser)\" mat-icon-button matTooltip=\"Datos Generales del Enrolamiento\" matTooltipClass=\"tooltip\">\n                <mat-icon color=\"primary\">info</mat-icon>\n              </button>\n              <button  (click)=\"changePasswordUser(element.idUser)\" mat-icon-button matTooltip=\"Datos Generales del Enrolamiento\" matTooltipClass=\"tooltip\">\n                <mat-icon color=\"warn\">policy</mat-icon>\n              </button>\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n        <mat-paginator #paginator  [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/administration/administration.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/administration/administration.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep {\n  height: 100%; }\n\n.layout-content {\n  width: 100%; }\n\ntable {\n  width: 100%; }\n\nth.mat-sort-header-sorted {\n  color: black; }\n\n.button-tooltip {\n  margin-top: 16px; }\n\n.tooltip {\n  background: #ff9c00; }\n"

/***/ }),

/***/ "./src/app/pages/administration/administration.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/administration/administration.component.ts ***!
  \******************************************************************/
/*! exports provided: AdministrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdministrationComponent", function() { return AdministrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./usuario/usuario.component */ "./src/app/pages/administration/usuario/usuario.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ELEMENT_DATA = [];
var AdministrationComponent = /** @class */ (function () {
    function AdministrationComponent(dialog, httpClient) {
        this.dialog = dialog;
        this.httpClient = httpClient;
        this.displayedColumns = ['idUser', 'name', 'paternalLastName', 'motherLastName', 'email', 'status_flag', 'opciones'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
    }
    AdministrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        ELEMENT_DATA = [];
        this.dataSource.data = ELEMENT_DATA;
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/forms/employee').subscribe(function (response) {
            if (response.data.length > 0) {
                response.data.forEach(function (element) {
                    _this.lyrUser = {
                        idUser: element.idUser,
                        name: element.name,
                        paternalLastName: element.paternalLastName,
                        motherLastName: element.motherLastName,
                        email: element.email,
                        profileId: element.profileId,
                        confirme_email: element.email,
                        password: '',
                        confirme_password: '',
                        status_flag: element.status_flag,
                        phone: element.phone,
                        sucursal: element.sucursal
                    };
                    ELEMENT_DATA.push(_this.lyrUser);
                    _this.dataSource.data = ELEMENT_DATA;
                });
            }
            else {
            }
        }, function (error) {
        });
    };
    AdministrationComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    AdministrationComponent.prototype.newUser = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        this.dialog.open(_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["UsuarioComponent"], { data: {
                model: { dataModal: "",
                    dataPassword: false }
            }
        });
    };
    AdministrationComponent.prototype.editUser = function (idUser) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        this.dialog.open(_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["UsuarioComponent"], { data: {
                model: { dataModal: idUser,
                    dataPassword: false }
            }
        });
    };
    AdministrationComponent.prototype.changePasswordUser = function (idUser) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        this.dialog.open(_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_4__["UsuarioComponent"], { data: {
                model: { dataModal: idUser,
                    dataPassword: true }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], AdministrationComponent.prototype, "paginator", void 0);
    AdministrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-administration',
            template: __webpack_require__(/*! ./administration.component.html */ "./src/app/pages/administration/administration.component.html"),
            styles: [__webpack_require__(/*! ./administration.component.scss */ "./src/app/pages/administration/administration.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], AdministrationComponent);
    return AdministrationComponent;
}());



/***/ }),

/***/ "./src/app/pages/administration/usuario/usuario.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pages/administration/usuario/usuario.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading [hidden]=\"loading\"></app-loading>\n<h1 mat-dialog-title style=\"margin-bottom:4px;\">Registro de Usuario</h1>\n<h4 class=\"body\" style=\"margin: 0px 0px 12px 0px;\">\n    <mat-label fxFlex=\"100\" class=\"mat-caption\">Todos los campos son obligatorios</mat-label>\n</h4>\n<div mat-dialog-content>\n    <div class=\"container\">\n        <div id=\"content\">\n            <div *ngIf=\"!passwordVisible\" fxLayout=\"column\"  fxLayoutAlign=\"start\">\n                <div fxLayout=\"row\" fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <mat-form-field fxFlex=\"50\" fxFlex.sm=\"100\">\n                        <mat-label>Apellido paterno</mat-label>\n                        <input matInput [(ngModel)]=\"ObjUser.paternalLastName\" placeholder=\"Apellido paterno\">\n                    </mat-form-field>\n                    <mat-form-field fxFlex=\"50\" fxFlex.sm=\"100\">\n                        <mat-label>Apellido materno</mat-label>\n                        <input matInput [(ngModel)]=\"ObjUser.motherLastName\" placeholder=\"Apellido materno\">\n                    </mat-form-field>\n                </div>\n                <div fxLayout=\"row\">\n                    <mat-form-field fxFlex=\"100\">\n                        <mat-label>Nombre del usuario</mat-label>\n                        <input matInput [(ngModel)]=\"ObjUser.name\" placeholder=\"Nombre del usuario\">\n                    </mat-form-field>\n                </div>\n                <div *ngIf=\"userVisible\" fxLayout=\"row\" fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <mat-form-field fxFlex=\"50\"  fxFlex.sm=\"100\">\n                        <mat-label>Correo electronico</mat-label>\n                        <input matInput [(ngModel)]=\"ObjUser.email\" placeholder=\"Correo electronico\">\n                    </mat-form-field>\n                    <mat-form-field fxFlex=\"50\"  fxFlex.sm=\"100\">\n                        <mat-label>Confirmación de correo electronico</mat-label>\n                        <input matInput [(ngModel)]=\"ObjUser.confirme_email\" placeholder=\"Confirme correo electronico\">\n                    </mat-form-field>\n                </div>\n                <div fxLayout=\"row\" fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <mat-form-field fxFlex=\"50\"  fxFlex.sm=\"100\">\n                        <mat-label>Número telefonico de contacto</mat-label>\n                        <input matInput [(ngModel)]=\"ObjUser.phone\" placeholder=\"Número telefonico de contacto\">\n                    </mat-form-field>\n                    <mat-form-field fxFlex=\"50\"  fxFlex.sm=\"100\">\n                        <mat-label>Sucursal</mat-label>\n                        <mat-select [(ngModel)]=\"ObjUser.sucursal\" [(value)]=\"sucursal\"  placeholder=\"Sucursal\">\n                            <mat-option *ngFor=\"let branch of branchies\"\n                                        [value]=\"branch.id\">{{branch.name}}</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <div fxLayout=\"row\" fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <mat-form-field fxFlex=\"100\"  fxFlex.sm=\"100\">\n                        <mat-label>Perfil</mat-label>\n                        <mat-select [(ngModel)]=\"ObjUser.profileId\" [(value)]=\"selected\"  placeholder=\"Perfil del usuario\">\n                            <mat-option value=\"1\">Administrador</mat-option>\n                            <mat-option value=\"2\">Promotor</mat-option>\n                            <mat-option value=\"3\">Consulta</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n                <div  *ngIf=\"!userVisible\"  fxLayout=\"row\" fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <mat-checkbox  [(ngModel)]=\"ObjUser.status_flag\">Activo</mat-checkbox>\n                </div>\n                <div *ngIf=\"userVisible\" fxLayout=\"row\" fxFlex=\"100\"\n                     fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <button mat-flat-button (click)=\"registar()\">Registrar usuario</button>\n                </div>\n                <div *ngIf=\"!userVisible\" fxLayout=\"row\" fxFlex=\"100\"\n                     fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <button mat-flat-button (click)=\"update()\">Actualizar usuario</button>\n                </div>\n            </div>\n            <div *ngIf=\"passwordVisible\" fxLayout=\"column\"  fxLayoutAlign=\"start\">\n                <div fxLayout=\"row\" fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <mat-form-field fxFlex=\"100\"  fxFlex.sm=\"100\">\n                        <mat-label>Correo electronico</mat-label>\n                        <input matInput [(ngModel)]=\"ObjUser.email\" placeholder=\"Correo electronico\">\n                    </mat-form-field>\n\n                </div>\n                <div fxLayout=\"row\" fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <button mat-raised-button (click)=\"sendEmail()\" color=\"primary\" fxFill fxFlexFill>Enviar correo</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/administration/usuario/usuario.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/pages/administration/usuario/usuario.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/administration/usuario/usuario.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/administration/usuario/usuario.component.ts ***!
  \*******************************************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/confirm-dialog.service */ "./src/app/services/confirm-dialog.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(router, httpClient, sanitizer, dialogRef, dialogService, data, document) {
        var _this = this;
        this.router = router;
        this.httpClient = httpClient;
        this.sanitizer = sanitizer;
        this.dialogRef = dialogRef;
        this.dialogService = dialogService;
        this.document = document;
        this.loading = true;
        this.selected = '1';
        this.sucursal = '1';
        this.branchies = [];
        this.ObjUser = {
            idUser: '',
            name: '',
            paternalLastName: '',
            motherLastName: '',
            email: '',
            confirme_email: "",
            password: "",
            confirme_password: "",
            profileId: "1",
            status_flag: 1,
            phone: "",
            sucursal: "1"
        };
        this.options = {
            title: 'ATENCION',
            message: '',
            cancelText: null,
            confirmText: 'CERRAR'
        };
        this.userId = data.model.dataModal;
        if (this.userId > 0) {
            this.userVisible = false;
        }
        else {
            this.userVisible = true;
        }
        this.passwordVisible = data.model.dataPassword;
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + '/forms/branchoffice').subscribe(function (response) {
            if (response.data.length > 0) {
                response.data.forEach(function (element) {
                    var lyrBranch = {
                        id: element.id,
                        numberBranch: element.numberBranch,
                        name: element.name,
                        city: element.city,
                        state: element.state,
                        status_flag: element.status_flag,
                    };
                    _this.branchies.push(lyrBranch);
                });
            }
            else {
            }
        }, function (error) {
        });
    }
    UsuarioComponent.prototype.ngOnInit = function () {
        var _this = this;
        if ((this.userId > 0) || (this.userId != null)) {
            this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + '/forms/employee/' + this.userId).subscribe(function (response) {
                if (response.result) {
                    if (response.data != null) {
                        _this.ObjUser = response.data;
                        _this.ObjUser.sucursal = _this.ObjUser.sucursal + "";
                    }
                }
                else {
                }
            }, function (error) {
            });
        }
    };
    UsuarioComponent.prototype.registar = function () {
        var _this = this;
        var regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var passwordExp = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/;
        if (this.ObjUser.email == '' || this.ObjUser.confirme_email == '' ||
            this.ObjUser.email == null || this.ObjUser.confirme_email == null) {
            this.options.message = "Su correo electrónico y/o su confirmación no puede ser vacio";
            this.dialogService.open(this.options);
            return false;
        }
        if (!regularExpression.test(String(this.ObjUser.email).toLowerCase()) ||
            !regularExpression.test(String(this.ObjUser.confirme_email).toLowerCase())) {
            this.options.message = "Su correo electrónico y/o su confirmación no es un formato de correo electrónico";
            this.dialogService.open(this.options);
            return false;
        }
        if (this.ObjUser.email != this.ObjUser.confirme_email) {
            this.options.message = "Su correo electrónico y su confirmación no son iguales";
            this.dialogService.open(this.options);
            return false;
        }
        if (this.ObjUser.paternalLastName == '' || this.ObjUser.paternalLastName == null) {
            this.options.message = "El apellido paterno no puede ser vacio o nulo";
            this.dialogService.open(this.options);
            return false;
        }
        if (this.ObjUser.name == '' || this.ObjUser.name == null) {
            this.options.message = "El nombre no puede ser vacio o nulo";
            this.dialogService.open(this.options);
            return false;
        }
        var ObjUser = {
            name: this.ObjUser.name,
            paternalLastName: this.ObjUser.paternalLastName,
            motherLastName: this.ObjUser.motherLastName,
            profileId: (this.ObjUser.profileId) ? this.ObjUser.profileId : 3,
            password: this.ObjUser.password,
            email: this.ObjUser.email,
            phone: this.ObjUser.phone,
            typeUser: 2,
            sucursal: this.ObjUser.sucursal
        };
        this.loading = false;
        this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + '/forms/employee', ObjUser).subscribe(function (response) {
            if (response.result) {
                _this.loading = true;
                _this.document.location.reload();
            }
            else {
                _this.options.message = response.message;
                _this.dialogService.open(_this.options);
                _this.loading = true;
                _this.router.navigate(['administration/list']);
                /*this.dialogService.confirmed().subscribe(confirmed => {
                    if (confirmed) {
                        this.dialogService.canc;
                    }
                });*/
            }
        }, function (error) {
            _this.options.message = "Error en el registro del usuario";
            _this.dialogService.open(_this.options);
            _this.loading = true;
            _this.router.navigate(['administration/list']);
        });
    };
    UsuarioComponent.prototype.update = function () {
        var _this = this;
        if (this.ObjUser.paternalLastName == '' || this.ObjUser.paternalLastName == null) {
            this.options.message = "El apellido paterno no puede ser vacio o nulo";
            this.dialogService.open(this.options);
            return false;
        }
        if (this.ObjUser.name == '' || this.ObjUser.name == null) {
            this.options.message = "El nombre no puede ser vacio o nulo";
            this.dialogService.open(this.options);
            return false;
        }
        var ObjUser = {
            name: this.ObjUser.name,
            paternalLastName: this.ObjUser.paternalLastName,
            motherLastName: this.ObjUser.motherLastName,
            profileId: this.ObjUser.profileId,
            status_flag: (this.ObjUser.status_flag) ? 1 : 0,
            phone: this.ObjUser.phone,
            typeUser: 2,
            sucursal: this.ObjUser.sucursal
        };
        this.loading = false;
        this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + '/forms/employee/' + this.userId, ObjUser).subscribe(function (response) {
            if (response.result) {
                _this.document.location.reload();
                _this.loading = true;
            }
            else {
                _this.options.message = response.message;
                _this.dialogService.open(_this.options);
                _this.loading = true;
            }
        }, function (error) {
            _this.options.message = "Error en el registro del usuario";
            _this.dialogService.open(_this.options);
            _this.loading = true;
        });
    };
    UsuarioComponent.prototype.sendEmail = function () {
        var _this = this;
        var ObjUser = {
            username: '',
            password: '',
            email: this.ObjUser.email,
        };
        this.loading = false;
        this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + '/forms/employee/restorepassword', ObjUser).subscribe(function (response) {
            if (response.result) {
                _this.loading = true;
                _this.options.message = "Se ha enviado un correo electrónico con su nueva contraseña";
                _this.dialogService.open(_this.options);
            }
            else {
                _this.loading = true;
                _this.options.message = response.message;
                _this.dialogService.open(_this.options);
            }
        }, function (error) {
            _this.loading = true;
            _this.options.message = "Error en el registro del usuario";
            _this.dialogService.open(_this.options);
        });
    };
    UsuarioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-usuario',
            template: __webpack_require__(/*! ./usuario.component.html */ "./src/app/pages/administration/usuario/usuario.component.html"),
            styles: [__webpack_require__(/*! ./usuario.component.scss */ "./src/app/pages/administration/usuario/usuario.component.scss")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogService"], Object, Document])
    ], UsuarioComponent);
    return UsuarioComponent;
}());



/***/ }),

/***/ "./src/app/pages/branchoffice/branchoffice.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/branchoffice/branchoffice.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Administración/Sucursales</h1>\n<div fxLayout=\"row wrap\">\n    <div class=\"layout-content\">\n        <div fxFlex=\"100\" class=\"ui-g dashboard\">\n            <div fxFlex=\"100\" class=\"card\">\n                <div  class=\"flex-container\"\n                      fxLayout=\"row\"\n                      fxLayoutAlign=\"space-between center\">\n                    <button mat-flat-button (click)=\"newBranch()\"><mat-icon>add_circle</mat-icon>Nuevo</button>\n                    &nbsp;<mat-form-field>\n                    <input matInput placeholder=\"Buscar\">\n                </mat-form-field>\n                </div>\n                <table mat-table #table [dataSource]=\"dataSource\" matSort >\n                    <ng-container matColumnDef=\"id\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.id}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Sucursal</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"city\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Ciudad</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.city}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"state\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Estado</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{ state[element.state-1]}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"status_flag\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Activo</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{ (element.status_flag == 1)? 'SI' : 'NO'}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"opciones\">\n                        <th mat-header-cell *matHeaderCellDef></th>\n                        <td mat-cell *matCellDef=\"let element\" fxLayoutAlign=\"center\">\n                            <button  (click)=\"editBranch(element.id)\" mat-icon-button matTooltip=\"Datos Generales del Enrolamiento\" matTooltipClass=\"tooltip\">\n                                <mat-icon color=\"primary\">info</mat-icon>\n                            </button>\n                        </td>\n                    </ng-container>\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <mat-paginator #paginator  [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/branchoffice/branchoffice.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/pages/branchoffice/branchoffice.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep {\n  height: 100%; }\n\n.layout-content {\n  width: 100%; }\n\ntable {\n  width: 100%; }\n\nth.mat-sort-header-sorted {\n  color: black; }\n\n.button-tooltip {\n  margin-top: 16px; }\n\n.tooltip {\n  background: #ff9c00; }\n"

/***/ }),

/***/ "./src/app/pages/branchoffice/branchoffice.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/branchoffice/branchoffice.component.ts ***!
  \**************************************************************/
/*! exports provided: BranchofficeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchofficeComponent", function() { return BranchofficeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _edition_branch_edition_branch_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edition-branch/edition-branch.component */ "./src/app/pages/branchoffice/edition-branch/edition-branch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ELEMENT_DATA = [];
var BranchofficeComponent = /** @class */ (function () {
    function BranchofficeComponent(dialog, httpClient) {
        this.dialog = dialog;
        this.httpClient = httpClient;
        this.displayedColumns = ['id', 'name', 'city', 'state', 'status_flag', 'opciones'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.state = [
            "Aguascalientes",
            "Baja California",
            "Baja California Sur",
            "Campeche",
            "Coahuila de Zaragoza",
            "Colima",
            "Chiapas",
            "Chihuahua",
            "Ciudad de México",
            "Durango",
            "Guanajuato",
            "Guerrero",
            "Hidalgo",
            "Jalisco",
            "México",
            "Michoacán de Ocampo",
            "Morelos",
            "Nayarit",
            "Nuevo León",
            "Oaxaca",
            "Puebla",
            "Querétaro",
            "Quintana Roo",
            "San Luis Potosí",
            "Sinaloa",
            "Sonora",
            "Tabasco",
            "Tamaulipas",
            "Tlaxcala",
            "Veracruz de Ignacio de la Llave",
            "Yucatán",
            "Zacatecas"
        ];
    }
    BranchofficeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        ELEMENT_DATA = [];
        this.dataSource.data = ELEMENT_DATA;
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].apiUrl + '/forms/branchoffice').subscribe(function (response) {
            if (response.data.length > 0) {
                response.data.forEach(function (element) {
                    _this.lyrBranch = {
                        id: element.id,
                        numberBranch: element.numberBranch,
                        name: element.name,
                        city: element.city,
                        state: element.state,
                        status_flag: element.status_flag,
                    };
                    ELEMENT_DATA.push(_this.lyrBranch);
                    _this.dataSource.data = ELEMENT_DATA;
                });
            }
            else {
            }
        }, function (error) {
        });
    };
    BranchofficeComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    BranchofficeComponent.prototype.newBranch = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        this.dialog.open(_edition_branch_edition_branch_component__WEBPACK_IMPORTED_MODULE_6__["EditionBranchComponent"], { data: {
                model: { dataModal: "" }
            }
        });
    };
    BranchofficeComponent.prototype.editBranch = function (idBranch) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        this.dialog.open(_edition_branch_edition_branch_component__WEBPACK_IMPORTED_MODULE_6__["EditionBranchComponent"], { data: {
                model: { dataModal: idBranch }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], BranchofficeComponent.prototype, "paginator", void 0);
    BranchofficeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-branchoffice',
            template: __webpack_require__(/*! ./branchoffice.component.html */ "./src/app/pages/branchoffice/branchoffice.component.html"),
            styles: [__webpack_require__(/*! ./branchoffice.component.scss */ "./src/app/pages/branchoffice/branchoffice.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], BranchofficeComponent);
    return BranchofficeComponent;
}());



/***/ }),

/***/ "./src/app/pages/branchoffice/edition-branch/edition-branch.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/branchoffice/edition-branch/edition-branch.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading [hidden]=\"loading\"></app-loading>\n<h1 mat-dialog-title style=\"margin-bottom:4px;\">Registro de sucursal</h1>\n<h4 class=\"body\" style=\"margin: 0px 0px 12px 0px;\">\n    <mat-label fxFlex=\"100\" class=\"mat-caption\">Todos los campos son obligatorios</mat-label>\n</h4>\n<div mat-dialog-content>\n    <div class=\"container\">\n        <div id=\"content\">\n            <div fxLayout=\"column\"  fxLayoutAlign=\"start\">\n                <div fxLayout=\"row\" fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <mat-form-field fxFlex=\"50\" fxFlex.sm=\"100\">\n                        <mat-label>Nombre de Sucursal</mat-label>\n                        <input matInput [(ngModel)]=\"ObjBranch.name\" placeholder=\"Nombre de sucursal\">\n                    </mat-form-field>\n\n                    <mat-form-field fxFlex=\"50\" fxFlex.sm=\"100\">\n                        <mat-label>Ciudad</mat-label>\n                        <input matInput [(ngModel)]=\"ObjBranch.city\" placeholder=\"Ciudad\">\n                    </mat-form-field>\n                </div>\n                <div fxLayout=\"row\">\n                    <mat-form-field fxFlex=\"100\">\n                        <mat-label>Estado</mat-label>\n                        <mat-select [(ngModel)]=\"ObjBranch.state\" [(value)]=\"stateSelected\" placeholder=\"Estado\">\n                            <mat-option value=\"1\">Aguascalientes</mat-option>\n                            <mat-option value=\"2\">Baja California</mat-option>\n                            <mat-option value=\"3\">Baja California Sur</mat-option>\n                            <mat-option value=\"4\">Campeche</mat-option>\n                            <mat-option value=\"5\">Coahuila de Zaragoza</mat-option>\n                            <mat-option value=\"6\">Colima</mat-option>\n                            <mat-option value=\"7\">Chiapas</mat-option>\n                            <mat-option value=\"8\">Chihuahua</mat-option>\n                            <mat-option value=\"9\">Ciudad de México</mat-option>\n                            <mat-option value=\"10\">Durango</mat-option>\n                            <mat-option value=\"11\">Guanajuato</mat-option>\n                            <mat-option value=\"12\">Guerrero</mat-option>\n                            <mat-option value=\"13\">Hidalgo</mat-option>\n                            <mat-option value=\"14\">Jalisco</mat-option>\n                            <mat-option value=\"15\">México</mat-option>\n                            <mat-option value=\"16\">Michoacán de Ocampo</mat-option>\n                            <mat-option value=\"17\">Morelos</mat-option>\n                            <mat-option value=\"18\">Nayarit</mat-option>\n                            <mat-option value=\"19\">Nuevo León</mat-option>\n                            <mat-option value=\"20\">Oaxaca</mat-option>\n                            <mat-option value=\"21\">Puebla</mat-option>\n                            <mat-option value=\"22\">Querétaro</mat-option>\n                            <mat-option value=\"23\">Quintana Roo</mat-option>\n                            <mat-option value=\"24\">San Luis Potosí</mat-option>\n                            <mat-option value=\"25\">Sinaloa</mat-option>\n                            <mat-option value=\"26\">Sonora</mat-option>\n                            <mat-option value=\"27\">Tabasco</mat-option>\n                            <mat-option value=\"28\">Tamaulipas</mat-option>\n                            <mat-option value=\"29\">Tlaxcala</mat-option>\n                            <mat-option value=\"30\">Veracruz de Ignacio de la Llave</mat-option>\n                            <mat-option value=\"31\">Yucatán</mat-option>\n                            <mat-option value=\"32\">Zacatecas</mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </div>\n\n                <div *ngIf=\"branchVisible\" fxLayout=\"row\" fxFlex=\"100\"\n                     fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <button mat-flat-button (click)=\"registar()\">Registrar sucursal</button>\n                </div>\n                <div *ngIf=\"!branchVisible\" fxLayout=\"row\" fxFlex=\"100\" fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <button mat-flat-button (click)=\"update()\">Actualizar sucursal</button>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/branchoffice/edition-branch/edition-branch.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/branchoffice/edition-branch/edition-branch.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/branchoffice/edition-branch/edition-branch.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/branchoffice/edition-branch/edition-branch.component.ts ***!
  \*******************************************************************************/
/*! exports provided: EditionBranchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditionBranchComponent", function() { return EditionBranchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/confirm-dialog.service */ "./src/app/services/confirm-dialog.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var EditionBranchComponent = /** @class */ (function () {
    function EditionBranchComponent(router, httpClient, sanitizer, dialogRef, dialogService, authUser, data, document) {
        this.router = router;
        this.httpClient = httpClient;
        this.sanitizer = sanitizer;
        this.dialogRef = dialogRef;
        this.dialogService = dialogService;
        this.authUser = authUser;
        this.document = document;
        this.loading = true;
        this.ObjBranch = {
            id: null,
            numberBranch: '0',
            name: '',
            city: '',
            state: null,
            status_flag: 1
        };
        this.stateSelected = 1 + "";
        this.options = {
            title: 'ATENCION',
            message: '',
            cancelText: null,
            confirmText: 'CERRAR'
        };
        this.branchId = data.model.dataModal;
        if (this.branchId > 0) {
            this.branchVisible = false;
        }
        else {
            this.branchVisible = true;
        }
        this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser()));
    }
    EditionBranchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser()));
        if ((this.branchId > 0) || (this.branchId != null)) {
            this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + '/forms/branchoffice/' + this.branchId).subscribe(function (response) {
                if (response.result) {
                    if (response.data != null) {
                        _this.ObjBranch = response.data;
                        _this.ObjBranch.state = response.data.state + "";
                        _this.stateSelected = response.data.state + "";
                    }
                }
                else {
                }
            }, function (error) {
            });
        }
    };
    EditionBranchComponent.prototype.registar = function () {
        var _this = this;
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
        var ObjBranch = {
            name: this.ObjBranch.name,
            city: this.ObjBranch.city,
            state: this.ObjBranch.state
        };
        this.loading = false;
        this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + '/forms/branchoffice', ObjBranch).subscribe(function (response) {
            if (response.result) {
                _this.loading = true;
                _this.document.location.reload();
            }
            else {
                _this.options.message = response.message;
                _this.dialogService.open(_this.options);
                _this.loading = true;
                //this.router.navigate(['administration/list']);
            }
        }, function (error) {
            _this.options.message = "Error en el registro del usuario";
            _this.dialogService.open(_this.options);
            _this.loading = true;
            //this.router.navigate(['administration/list']);
        });
    };
    EditionBranchComponent.prototype.update = function () {
        var _this = this;
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
        this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].apiUrl + '/forms/branchoffice/' + this.branchId, this.ObjBranch).subscribe(function (response) {
            if (response.result) {
                _this.document.location.reload();
                _this.loading = true;
            }
            else {
                _this.options.message = response.message;
                _this.dialogService.open(_this.options);
                _this.loading = true;
            }
        }, function (error) {
            _this.options.message = "Error en el registro del usuario";
            _this.dialogService.open(_this.options);
            _this.loading = true;
        });
    };
    EditionBranchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edition-branch',
            template: __webpack_require__(/*! ./edition-branch.component.html */ "./src/app/pages/branchoffice/edition-branch/edition-branch.component.html"),
            styles: [__webpack_require__(/*! ./edition-branch.component.scss */ "./src/app/pages/branchoffice/edition-branch/edition-branch.component.scss")]
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"],
            _services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"], Object, Document])
    ], EditionBranchComponent);
    return EditionBranchComponent;
}());



/***/ }),

/***/ "./src/app/pages/enrolments/enrolments.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/enrolments/enrolments.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Enrolamientos</h1>\n<app-loading [hidden]=\"loading\"></app-loading>\n<div fxLayout=\"row wrap\">\n    <div class=\"layout-content\">\n        <div fxFlex=\"100\" class=\"ui-g dashboard\">\n            <div fxFlex=\"100\" class=\"card\">\n                <div fxLayout fxLayoutAlign=\"space-between center\">\n                    <mat-form-field fxFlex=\"30%\">\n                        <input matInput (keydown.enter)=\"applyFilter($event.target.value)\" placeholder=\"Buscar nombre,email\">\n                    </mat-form-field>\n                    <div fxFlex=\"30%\" fxLayoutAlign=\"end center\">\n                        <button mat-raised-button (click)=\"exportExcel()\">\n                            <mat-icon>file_download</mat-icon>&nbsp;Excel\n                        </button>\n                    </div>\n                </div>\n\n                <table mat-table #table [dataSource]=\"dataSource\" matSort >\n                    <ng-container matColumnDef=\"folio\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Folio</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.folio}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"fecha\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Fecha Solictud</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.fecha | date: 'yyyy-MM-dd':'UTC'}}  </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"crtdBy\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Promotor</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.crtdBy }} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"enrolment\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Enrolamiento</th>\n                        <td mat-cell *matCellDef=\"let element\">{{element.enrolment}}</td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"name\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Nombres</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"fisrtLastName\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Apellido paterno</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.fisrtLastName}} </td>\n                    </ng-container>\n\n                    <ng-container matColumnDef=\"secondLastName\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Apellido materno</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.secondLastName}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"status\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Estatus</th>\n                        <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"layerDocument\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Capa documento</th>\n                        <td mat-cell *matCellDef=\"let element\" >\n                            <a mat-icon-button class=\"text-link\" (click)=\"dlgLayerDocument(element.folio)\">{{element.layerDocument}}</a>\n                        </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"layerBiometic\">\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Capa Selfie</th>\n                        <td mat-cell *matCellDef=\"let element\"  >\n                            <a mat-icon-button class=\"text-link\" (click)=\"dlgLayerBiometric(element.folio)\"> {{element.layerBiometic}}</a>\n                        </td>\n                    </ng-container>\n                    <ng-container matColumnDef=\"solicitud\" >\n                        <th mat-header-cell *matHeaderCellDef mat-sort-header>Solicitud</th>\n                        <td mat-cell *matCellDef=\"let element\" >\n                            <a  [href]=\"urlsolicitud+'/'+ element.folio\" target=\"_blank\" mat-icon-button matTooltip=\"Solicitud de credito\" matTooltipClass=\"tooltip\">\n                                <mat-icon>assignment</mat-icon>\n                            </a>\n                        </td>\n                    </ng-container>\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                </table>\n                <mat-paginator  #paginator\n                                [pageSize]=\"pageSize\"\n                                [pageSizeOptions]=\"[5, 10, 20]\"\n                                (page)=\"pageEvent = $event\"\n                                showFirstLastButtons></mat-paginator>\n            </div>\n        </div>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/enrolments/enrolments.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/enrolments/enrolments.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep {\n  height: 100%; }\n\n.app-login {\n  background-color: 1; }\n\n.layout-content {\n  width: 100%; }\n\ntable {\n  width: 100%; }\n\nth.mat-sort-header-sorted {\n  color: black; }\n\ntr:hover {\n  background: rgba(205, 211, 216, 0.35); }\n\ntr:active {\n  background: #efefef; }\n\n.button-tooltip {\n  margin-top: 16px; }\n\n.tooltip {\n  background: #ff9c00; }\n\n.text-link {\n  cursor: default; }\n\n.text-link:hover {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/pages/enrolments/enrolments.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/enrolments/enrolments.component.ts ***!
  \**********************************************************/
/*! exports provided: EnrolmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnrolmentsComponent", function() { return EnrolmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _dialogs_layer_document_layer_document_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dialogs/layer-document/layer-document.component */ "./src/app/dialogs/layer-document/layer-document.component.ts");
/* harmony import */ var _dialogs_layer_biometric_layer_biometric_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialogs/layer-biometric/layer-biometric.component */ "./src/app/dialogs/layer-biometric/layer-biometric.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ELEMENT_DATA = [];
var EnrolmentsComponent = /** @class */ (function () {
    function EnrolmentsComponent(dialog, authUser, httpClient) {
        this.dialog = dialog;
        this.authUser = authUser;
        this.httpClient = httpClient;
        this.loading = false;
        this.urlsolicitud = '';
        this.displayedColumns = ['folio', 'fecha', 'crtdBy', 'enrolment', 'name', 'fisrtLastName', 'secondLastName', 'status',
            'layerDocument', 'layerBiometic', 'solicitud'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.pageSize = 10;
        ELEMENT_DATA = [];
        this.urlsolicitud = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + "/pdf/solicitud/view";
        this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser()));
    }
    EnrolmentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser()));
        ELEMENT_DATA = [];
        this.dataSource.paginator = this.paginator;
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + '/catalogies/getCustomersUser/' + this.userCurrent.idUser).subscribe(function (result) {
            if (result.data.length > 0) {
                result.data.forEach(function (element) {
                    _this.lyrElt = {
                        folio: element.creditId,
                        fecha: element.crtd_on,
                        crtdBy: element.crtd_by,
                        enrolment: element.enrolment,
                        name: element.customer.name,
                        fisrtLastName: element.customer.paternalLastName,
                        secondLastName: element.customer.motherLastName,
                        status: element.status,
                        layerDocument: element.layerDocument,
                        layerBiometic: element.layerBiometric,
                        solicitud: element.solicitud
                    };
                    ELEMENT_DATA.push(_this.lyrElt);
                });
                _this.dataSource.data = ELEMENT_DATA;
                _this.loading = true;
            }
        }, function (error) {
            _this.loading = true;
        });
    };
    EnrolmentsComponent.prototype.dataTable = function (data) {
        var _this = this;
        ELEMENT_DATA = [];
        this.dataSource.data = ELEMENT_DATA;
        if (data.length > 0) {
            data.forEach(function (element) {
                _this.lyrElt = {
                    folio: element.customer.creditId,
                    fecha: element.customer.birthday,
                    crtdBy: element.crtd_by,
                    enrolment: element.enrolment,
                    name: element.customer.name,
                    fisrtLastName: element.customer.paternalLastName,
                    secondLastName: element.customer.motherLastName,
                    status: element.status,
                    layerDocument: element.layerDocument,
                    layerBiometic: element.layerBiometric,
                    solicitud: element.solicitud
                };
                ELEMENT_DATA.push(_this.lyrElt);
            });
            this.dataSource.data = ELEMENT_DATA;
        }
    };
    EnrolmentsComponent.prototype.isNaN = function (val) {
        return Number.isNaN(parseFloat(val)) ? 0 : val;
    };
    EnrolmentsComponent.prototype.applyFilter = function (filterValue) {
        var _this = this;
        var dataFilter = {
            startdate: "",
            enddate: "",
            status: "",
            search: filterValue
        };
        this.dataSource.filter = filterValue.trim().toLowerCase();
        if (this.dataSource.filteredData.length == 0) {
            ELEMENT_DATA = [];
            this.dataSource.data = ELEMENT_DATA;
            this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + "/filter/customerstransacion/search", dataFilter)
                .subscribe(function (response) {
                if (response.result) {
                    _this.dataSource.filter = '';
                    _this.dataTable(response.data);
                    _this.loading = true;
                }
            }, function (error) { _this.loading = true; });
        }
    };
    EnrolmentsComponent.prototype.exportExcel = function () {
        var _this = this;
        var httpOptions = {
            responseType: 'arraybuffer',
            headers: new Headers()
        };
        // @ts-ignore
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + "/export/enrolments/excel/" + this.userCurrent.idUser, httpOptions)
            .subscribe(function (response) {
            var binaryData = [];
            binaryData.push(response);
            var downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: 'blob' }));
            downloadLink.setAttribute('download', "enrolados.xlsx");
            document.body.appendChild(downloadLink);
            downloadLink.click();
        }, function (error) { console.log(error); _this.loading = true; });
    };
    EnrolmentsComponent.prototype.dlgLayerDocument = function (creditId) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        dialogConfig.data = {
            idDocument: 5
        };
        this.dialog.open(_dialogs_layer_document_layer_document_component__WEBPACK_IMPORTED_MODULE_4__["LayerDocumentComponent"], { data: {
                model: { dataModal: creditId }
            }
        });
    };
    EnrolmentsComponent.prototype.dlgLayerBiometric = function (creditId) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        dialogConfig.data = {
            idDocument: 5
        };
        this.dialog.open(_dialogs_layer_biometric_layer_biometric_component__WEBPACK_IMPORTED_MODULE_5__["LayerBiometricComponent"], { data: {
                model: { dataModal: creditId }
            }
        });
    };
    EnrolmentsComponent.prototype.dlgSolicitud = function (creditId) {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], EnrolmentsComponent.prototype, "paginator", void 0);
    EnrolmentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enrolments',
            template: __webpack_require__(/*! ./enrolments.component.html */ "./src/app/pages/enrolments/enrolments.component.html"),
            styles: [__webpack_require__(/*! ./enrolments.component.scss */ "./src/app/pages/enrolments/enrolments.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], EnrolmentsComponent);
    return EnrolmentsComponent;
}());



/***/ }),

/***/ "./src/app/pages/leaflet/edition/edition.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/leaflet/edition/edition.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-loading [hidden]=\"loading\"></app-loading>\n<h1 mat-dialog-title style=\"margin-bottom:4px;\">Registro de prospecto</h1>\n<h4 class=\"body\" style=\"margin: 0px 0px 12px 0px;\">\n    <mat-label fxFlex=\"100\" class=\"mat-caption\">Todos los campos son obligatorios</mat-label>\n</h4>\n<div mat-dialog-content>\n    <div class=\"container\">\n        <div id=\"content\">\n            <div *ngIf=\"!passwordVisible\" fxLayout=\"column\"  fxLayoutAlign=\"start\">\n                <div fxLayout=\"row\" fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <mat-form-field fxFlex=\"50\" fxFlex.sm=\"100\">\n                        <mat-label>Apellido paterno</mat-label>\n                        <input matInput [(ngModel)]=\"ObjUser.paternalLastName\" placeholder=\"Apellido paterno\">\n                    </mat-form-field>\n                    <mat-form-field fxFlex=\"50\" fxFlex.sm=\"100\">\n                        <mat-label>Apellido materno</mat-label>\n                        <input matInput [(ngModel)]=\"ObjUser.motherLastName\" placeholder=\"Apellido materno\">\n                    </mat-form-field>\n                </div>\n                <div fxLayout=\"row\">\n                    <mat-form-field fxFlex=\"100\">\n                        <mat-label>Nombre del usuario</mat-label>\n                        <input matInput [(ngModel)]=\"ObjUser.name\" placeholder=\"Nombre del usuario\">\n                    </mat-form-field>\n                </div>\n                <div fxLayout=\"row\" fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <mat-form-field fxFlex=\"50\"  fxFlex.sm=\"100\">\n                        <mat-label>Correo electronico</mat-label>\n                        <input matInput [(ngModel)]=\"ObjUser.email\" placeholder=\"Correo electronico\">\n                    </mat-form-field>\n                    <mat-form-field fxFlex=\"50\"  fxFlex.sm=\"100\">\n                        <mat-label>Confirmación de correo electronico</mat-label>\n                        <input matInput [(ngModel)]=\"ObjUser.confirme_email\" placeholder=\"Confirme correo electronico\">\n                    </mat-form-field>\n                </div>\n                <div fxLayout=\"row\" fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <mat-form-field fxFlex=\"50\"  fxFlex.sm=\"100\">\n                        <mat-label>Número telefonico de contacto</mat-label>\n                        <input matInput [(ngModel)]=\"ObjUser.phone\" placeholder=\"Número telefonico de contacto\">\n                    </mat-form-field>\n                </div>\n                <div *ngIf=\"userVisible\" fxLayout=\"row\" fxFlex=\"100\"\n                     fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <button mat-flat-button (click)=\"registar()\">Registrar usuario</button>\n                </div>\n                <div *ngIf=\"!userVisible\" fxLayout=\"row\" fxFlex=\"100\" fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <button mat-flat-button (click)=\"update()\">Actualizar usuario</button>\n                </div>\n            </div>\n            <div *ngIf=\"passwordVisible\" fxLayout=\"column\"  fxLayoutAlign=\"start\">\n                <div fxLayout=\"row\" fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <mat-form-field fxFlex=\"100\"  fxFlex.sm=\"100\">\n                        <mat-label>Correo electronico</mat-label>\n                        <input matInput [(ngModel)]=\"ObjUser.email\" placeholder=\"Correo electronico\">\n                    </mat-form-field>\n\n                </div>\n                <div fxLayout=\"row\" fxLayoutGap=\"16px\" fxLayoutAlign=\"flex-start\">\n                    <button mat-raised-button (click)=\"sendEmail()\" color=\"primary\" fxFill fxFlexFill>Enviar correo</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/pages/leaflet/edition/edition.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/leaflet/edition/edition.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/leaflet/edition/edition.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/leaflet/edition/edition.component.ts ***!
  \************************************************************/
/*! exports provided: EditionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditionComponent", function() { return EditionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/confirm-dialog.service */ "./src/app/services/confirm-dialog.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var EditionComponent = /** @class */ (function () {
    function EditionComponent(router, httpClient, sanitizer, dialogRef, dialogService, authUser, data, document) {
        this.router = router;
        this.httpClient = httpClient;
        this.sanitizer = sanitizer;
        this.dialogRef = dialogRef;
        this.dialogService = dialogService;
        this.authUser = authUser;
        this.document = document;
        this.loading = true;
        this.selected = 3;
        this.ObjUser = {
            idUser: '',
            name: '',
            paternalLastName: '',
            motherLastName: '',
            email: '',
            confirme_email: "",
            password: "",
            confirme_password: "",
            profileId: 4,
            status_flag: 1,
            phone: "",
            sucursal: ""
        };
        this.options = {
            title: 'ATENCION',
            message: '',
            cancelText: null,
            confirmText: 'CERRAR'
        };
        this.userId = data.model.dataModal;
        if (this.userId > 0) {
            this.userVisible = false;
        }
        else {
            this.userVisible = true;
        }
        this.passwordVisible = data.model.dataPassword;
        this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser()));
    }
    EditionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser()));
        if ((this.userId > 0) || (this.userId != null)) {
            this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + '/forms/userboard/' + this.userId).subscribe(function (response) {
                if (response.result) {
                    if (response.data != null) {
                        _this.ObjUser = response.data;
                        _this.ObjUser.confirme_email = _this.ObjUser.email;
                    }
                }
                else {
                }
            }, function (error) {
            });
        }
    };
    EditionComponent.prototype.registar = function () {
        var _this = this;
        var regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        var passwordExp = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/;
        if (this.ObjUser.email == '' || this.ObjUser.confirme_email == '' ||
            this.ObjUser.email == null || this.ObjUser.confirme_email == null) {
            this.options.message = "Su correo electrónico y/o su confirmación no puede ser vacio";
            this.dialogService.open(this.options);
            return false;
        }
        if (!regularExpression.test(String(this.ObjUser.email).toLowerCase()) ||
            !regularExpression.test(String(this.ObjUser.confirme_email).toLowerCase())) {
            this.options.message = "Su correo electrónico y/o su confirmación no es un formato de correo electrónico";
            this.dialogService.open(this.options);
            return false;
        }
        if (this.ObjUser.email != this.ObjUser.confirme_email) {
            this.options.message = "Su correo electrónico y su confirmación no son iguales";
            this.dialogService.open(this.options);
            return false;
        }
        if (this.ObjUser.paternalLastName == '' || this.ObjUser.password == null) {
            this.options.message = "El apellido paterno no puede ser vacio o nulo";
            this.dialogService.open(this.options);
            return false;
        }
        if (this.ObjUser.name == '' || this.ObjUser.name == null) {
            this.options.message = "El nombre no puede ser vacio o nulo";
            this.dialogService.open(this.options);
            return false;
        }
        var ObjUser = {
            name: this.ObjUser.name,
            paternalLastName: this.ObjUser.paternalLastName,
            motherLastName: this.ObjUser.motherLastName,
            profileId: 4,
            password: "",
            email: this.ObjUser.email,
            phone: this.ObjUser.phone,
            sucursal: "",
            typeUser: 1,
            crtd_by: this.userCurrent.email
        };
        this.loading = false;
        this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + '/forms/userboard/app', ObjUser).subscribe(function (response) {
            if (response.result) {
                _this.loading = true;
                _this.document.location.reload();
            }
            else {
                _this.options.message = response.message;
                _this.dialogService.open(_this.options);
                _this.loading = true;
                //this.router.navigate(['administration/list']);
            }
        }, function (error) {
            _this.options.message = "Error en el registro del usuario";
            _this.dialogService.open(_this.options);
            _this.loading = true;
            //this.router.navigate(['administration/list']);
        });
    };
    EditionComponent.prototype.update = function () {
        var _this = this;
        if (this.ObjUser.paternalLastName == '' || this.ObjUser.password == null) {
            this.options.message = "El apellido paterno no puede ser vacio o nulo";
            this.dialogService.open(this.options);
            return false;
        }
        if (this.ObjUser.name == '' || this.ObjUser.name == null) {
            this.options.message = "El nombre no puede ser vacio o nulo";
            this.dialogService.open(this.options);
            return false;
        }
        var ObjUser = {
            name: this.ObjUser.name,
            paternalLastName: this.ObjUser.paternalLastName,
            motherLastName: this.ObjUser.motherLastName,
            profileId: 4,
            status_flag: (this.ObjUser.status_flag) ? 1 : 0,
            typeUser: 1,
            phone: this.ObjUser.phone
        };
        this.loading = false;
        this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + '/forms/userboard/' + this.userId, ObjUser).subscribe(function (response) {
            if (response.result) {
                _this.document.location.reload();
                _this.loading = true;
            }
            else {
                _this.options.message = response.message;
                _this.dialogService.open(_this.options);
                _this.loading = true;
            }
        }, function (error) {
            _this.options.message = "Error en el registro del usuario";
            _this.dialogService.open(_this.options);
            _this.loading = true;
        });
    };
    EditionComponent.prototype.changePassword = function () {
        var _this = this;
        var passwordExp = /^(?=(?:.*\d){1})(?=(?:.*[A-Z]){1})(?=(?:.*[a-z]){1})\S{8,}$/;
        if (this.ObjUser.password != this.ObjUser.confirme_password) {
            this.options.message = "Su contraseña y su confirmación no son iguales";
            this.dialogService.open(this.options);
            return false;
        }
        if (!passwordExp.test(this.ObjUser.password)) {
            this.options.message = "Su contreseña debe tener por lo menos una mayuscula, un número y 8 caracteres con minimo";
            this.dialogService.open(this.options);
            return false;
        }
        var ObjUser = {
            password: this.ObjUser.password
        };
        this.loading = false;
        this.httpClient.put(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + '/forms/userboard/' + this.userId, ObjUser).subscribe(function (response) {
            if (response.result) {
                _this.loading = false;
                _this.document.location.reload();
            }
            else {
                _this.options.message = response.message;
                _this.dialogService.open(_this.options);
                _this.loading = true;
            }
        }, function (error) {
            _this.options.message = "Error en el cambio de contraseña";
            _this.dialogService.open(_this.options);
            _this.loading = true;
        });
    };
    EditionComponent.prototype.sendEmail = function () {
        var _this = this;
        var ObjUser = {
            username: '',
            password: '',
            email: this.ObjUser.email,
        };
        this.loading = false;
        this.httpClient.post(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].apiUrl + '/user/user/restorepassword', ObjUser).subscribe(function (response) {
            if (response.result) {
                _this.loading = true;
                _this.options.message = "Se ha enviado un correo electrónico con su nueva contraseña";
                _this.dialogService.open(_this.options);
            }
            else {
                _this.loading = true;
                _this.options.message = response.message;
                _this.dialogService.open(_this.options);
            }
        }, function (error) {
            _this.loading = true;
            _this.options.message = "Error en el registro del usuario";
            _this.dialogService.open(_this.options);
        });
    };
    EditionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edition',
            template: __webpack_require__(/*! ./edition.component.html */ "./src/app/pages/leaflet/edition/edition.component.html"),
            styles: [__webpack_require__(/*! ./edition.component.scss */ "./src/app/pages/leaflet/edition/edition.component.scss")]
        }),
        __param(6, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        __param(7, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"],
            _services_confirm_dialog_service__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"], Object, Document])
    ], EditionComponent);
    return EditionComponent;
}());



/***/ }),

/***/ "./src/app/pages/leaflet/leaflet.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/leaflet/leaflet.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Administración/Propectos</h1>\n<div fxLayout=\"row wrap\">\n  <div class=\"layout-content\">\n    <div fxFlex=\"100\" class=\"ui-g dashboard\">\n      <div fxFlex=\"100\" class=\"card\">\n        <div  class=\"flex-container\"\n              fxLayout=\"row\"\n              fxLayout.xs=\"column\"\n              fxLayoutAlign=\"space-between center\"\n              fxLayout.xs=\"start center\"\n        >\n          <button mat-flat-button (click)=\"newUser()\"><mat-icon>add_circle</mat-icon>Nuevo</button>\n          &nbsp;\n            <mat-form-field fxFlex=\"30%\">\n              <input matInput placeholder=\"Buscar\">\n            </mat-form-field>\n\n          <div fxFlex=\"30%\" fxLayoutAlign=\"end center\">\n            <button mat-raised-button (click)=\"exportExcel()\">\n              <mat-icon>file_download</mat-icon>&nbsp;Excel\n            </button>\n          </div>\n        </div>\n        <table mat-table #table [dataSource]=\"dataSource\" matSort >\n          <ng-container matColumnDef=\"idUser\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>ID</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.idUser}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"name\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Nombres</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"paternalLastName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Apellido paterno</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.paternalLastName}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"motherLastName\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Apellido materno</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.motherLastName}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"email\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Email</th>\n            <td mat-cell *matCellDef=\"let element\"> {{element.email}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"status_flag\">\n            <th mat-header-cell *matHeaderCellDef mat-sort-header>Activo</th>\n            <td mat-cell *matCellDef=\"let element\"> {{ (element.status_flag == 1)? 'SI' : 'NO'}} </td>\n          </ng-container>\n          <ng-container matColumnDef=\"opciones\">\n            <th mat-header-cell *matHeaderCellDef></th>\n            <td mat-cell *matCellDef=\"let element\" fxLayoutAlign=\"center\">\n              <button  (click)=\"editUser(element.idUser)\" mat-icon-button matTooltip=\"Datos Generales del Enrolamiento\" matTooltipClass=\"tooltip\">\n                <mat-icon color=\"primary\">info</mat-icon>\n              </button>\n              <button  (click)=\"changePasswordUser(element.idUser)\" mat-icon-button matTooltip=\"Datos Generales del Enrolamiento\" matTooltipClass=\"tooltip\">\n                <mat-icon color=\"warn\">policy</mat-icon>\n              </button>\n            </td>\n          </ng-container>\n\n          <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n          <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n        <mat-paginator #paginator  [pageSize]=\"pageSize\"\n                       [pageSizeOptions]=\"[5, 10, 20]\"\n                       (page)=\"pageEvent = $event\"\n                       showFirstLastButtons></mat-paginator>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/pages/leaflet/leaflet.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/leaflet/leaflet.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep {\n  height: 100%; }\n\n.layout-content {\n  width: 100%; }\n\ntable {\n  width: 100%; }\n\nth.mat-sort-header-sorted {\n  color: black; }\n\n.button-tooltip {\n  margin-top: 16px; }\n\n.tooltip {\n  background: #ff9c00; }\n"

/***/ }),

/***/ "./src/app/pages/leaflet/leaflet.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/leaflet/leaflet.component.ts ***!
  \****************************************************/
/*! exports provided: LeafletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeafletComponent", function() { return LeafletComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _edition_edition_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edition/edition.component */ "./src/app/pages/leaflet/edition/edition.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ELEMENT_DATA = [];
var LeafletComponent = /** @class */ (function () {
    function LeafletComponent(dialog, httpClient, authUser) {
        this.dialog = dialog;
        this.httpClient = httpClient;
        this.authUser = authUser;
        this.loading = true;
        this.pageSize = 10;
        this.displayedColumns = ['idUser', 'name', 'paternalLastName', 'motherLastName', 'email', 'status_flag', 'opciones'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](ELEMENT_DATA);
        this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser()));
    }
    LeafletComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource.paginator = this.paginator;
        this.userCurrent = JSON.parse(JSON.parse(this.authUser.getCurrentUser()));
        ELEMENT_DATA = [];
        this.dataSource.data = ELEMENT_DATA;
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + '/catalogies/getLeafletUser/' + this.userCurrent.idUser).subscribe(function (response) {
            if (response.data.length > 0) {
                response.data.forEach(function (element) {
                    _this.lyrUser = {
                        idUser: element.idUser,
                        name: element.name,
                        paternalLastName: element.paternalLastName,
                        motherLastName: element.motherLastName,
                        email: element.email,
                        profileId: element.profileId,
                        confirme_email: element.email,
                        password: '',
                        confirme_password: '',
                        status_flag: element.status_flag,
                        phone: "",
                        sucursal: 1
                    };
                    ELEMENT_DATA.push(_this.lyrUser);
                    _this.dataSource.data = ELEMENT_DATA;
                });
            }
            else {
            }
        }, function (error) {
        });
    };
    LeafletComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    LeafletComponent.prototype.newUser = function () {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        this.dialog.open(_edition_edition_component__WEBPACK_IMPORTED_MODULE_4__["EditionComponent"], { data: {
                model: { dataModal: "",
                    dataPassword: false }
            }
        });
    };
    LeafletComponent.prototype.editUser = function (idUser) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        this.dialog.open(_edition_edition_component__WEBPACK_IMPORTED_MODULE_4__["EditionComponent"], { data: {
                model: { dataModal: idUser,
                    dataPassword: false }
            }
        });
    };
    LeafletComponent.prototype.exportExcel = function () {
        var _this = this;
        var httpOptions = {
            responseType: 'arraybuffer',
            headers: new Headers()
        };
        // @ts-ignore
        this.httpClient.get(_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl + "/export/leaflet/excel", httpOptions)
            .subscribe(function (response) {
            var binaryData = [];
            binaryData.push(response);
            var downloadLink = document.createElement('a');
            downloadLink.href = window.URL.createObjectURL(new Blob(binaryData, { type: 'blob' }));
            downloadLink.setAttribute('download', "prospectos.xlsx");
            document.body.appendChild(downloadLink);
            downloadLink.click();
        }, function (error) { console.log(error); _this.loading = true; });
    };
    LeafletComponent.prototype.changePasswordUser = function (idUser) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.autoFocus = false;
        dialogConfig.disableClose = false;
        this.dialog.open(_edition_edition_component__WEBPACK_IMPORTED_MODULE_4__["EditionComponent"], { data: {
                model: { dataModal: idUser,
                    dataPassword: true }
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        __metadata("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], LeafletComponent.prototype, "paginator", void 0);
    LeafletComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leaflet',
            template: __webpack_require__(/*! ./leaflet.component.html */ "./src/app/pages/leaflet/leaflet.component.html"),
            styles: [__webpack_require__(/*! ./leaflet.component.scss */ "./src/app/pages/leaflet/leaflet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], LeafletComponent);
    return LeafletComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/pages-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AppsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppsRoutes", function() { return AppsRoutes; });
/* harmony import */ var _enrolments_enrolments_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./enrolments/enrolments.component */ "./src/app/pages/enrolments/enrolments.component.ts");
/* harmony import */ var _administration_administration_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./administration/administration.component */ "./src/app/pages/administration/administration.component.ts");
/* harmony import */ var _leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leaflet/leaflet.component */ "./src/app/pages/leaflet/leaflet.component.ts");
/* harmony import */ var _guard_administrador_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../guard/administrador.guard */ "./src/app/guard/administrador.guard.ts");
/* harmony import */ var _guard_promotor_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guard/promotor.guard */ "./src/app/guard/promotor.guard.ts");
/* harmony import */ var _guard_sync_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../guard/sync.guard */ "./src/app/guard/sync.guard.ts");
/* harmony import */ var _branchoffice_branchoffice_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./branchoffice/branchoffice.component */ "./src/app/pages/branchoffice/branchoffice.component.ts");







var AppsRoutes = [
    {
        path: 'enrolments',
        children: [{
                path: 'list',
                component: _enrolments_enrolments_component__WEBPACK_IMPORTED_MODULE_0__["EnrolmentsComponent"],
                canActivate: [_guard_sync_guard__WEBPACK_IMPORTED_MODULE_5__["SyncGuard"]]
            }]
    },
    {
        path: 'administration',
        children: [{
                path: 'list',
                component: _administration_administration_component__WEBPACK_IMPORTED_MODULE_1__["AdministrationComponent"],
                canActivate: [_guard_administrador_guard__WEBPACK_IMPORTED_MODULE_3__["AdministradorGuard"]]
            }, {
                path: 'leaflet',
                component: _leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_2__["LeafletComponent"],
                canActivate: [_guard_promotor_guard__WEBPACK_IMPORTED_MODULE_4__["PromotorGuard"]]
            }, {
                path: 'branch',
                component: _branchoffice_branchoffice_component__WEBPACK_IMPORTED_MODULE_6__["BranchofficeComponent"],
                canActivate: [_guard_administrador_guard__WEBPACK_IMPORTED_MODULE_3__["AdministradorGuard"]]
            }]
    }
];


/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/pages/pages-routing.module.ts");
/* harmony import */ var _enrolments_enrolments_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enrolments/enrolments.component */ "./src/app/pages/enrolments/enrolments.component.ts");
/* harmony import */ var _administration_administration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./administration/administration.component */ "./src/app/pages/administration/administration.component.ts");
/* harmony import */ var _administration_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./administration/usuario/usuario.component */ "./src/app/pages/administration/usuario/usuario.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./leaflet/leaflet.component */ "./src/app/pages/leaflet/leaflet.component.ts");
/* harmony import */ var _leaflet_edition_edition_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./leaflet/edition/edition.component */ "./src/app/pages/leaflet/edition/edition.component.ts");
/* harmony import */ var _share_share_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../share/share.module */ "./src/app/share/share.module.ts");
/* harmony import */ var _branchoffice_branchoffice_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./branchoffice/branchoffice.component */ "./src/app/pages/branchoffice/branchoffice.component.ts");
/* harmony import */ var _branchoffice_edition_branch_edition_branch_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./branchoffice/edition-branch/edition-branch.component */ "./src/app/pages/branchoffice/edition-branch/edition-branch.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppsRoutes"]),
                _share_share_module__WEBPACK_IMPORTED_MODULE_23__["ShareModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTableModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_12__["MatPaginatorModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_16__["DashboardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_18__["MatSelectModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardModule"]
            ],
            exports: [
                _administration_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_6__["UsuarioComponent"]
            ],
            entryComponents: [
                _administration_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_6__["UsuarioComponent"],
                _leaflet_edition_edition_component__WEBPACK_IMPORTED_MODULE_22__["EditionComponent"],
                _branchoffice_edition_branch_edition_branch_component__WEBPACK_IMPORTED_MODULE_25__["EditionBranchComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            declarations: [_enrolments_enrolments_component__WEBPACK_IMPORTED_MODULE_4__["EnrolmentsComponent"],
                _administration_administration_component__WEBPACK_IMPORTED_MODULE_5__["AdministrationComponent"],
                _administration_usuario_usuario_component__WEBPACK_IMPORTED_MODULE_6__["UsuarioComponent"],
                _leaflet_leaflet_component__WEBPACK_IMPORTED_MODULE_21__["LeafletComponent"],
                _leaflet_edition_edition_component__WEBPACK_IMPORTED_MODULE_22__["EditionComponent"],
                _branchoffice_branchoffice_component__WEBPACK_IMPORTED_MODULE_24__["BranchofficeComponent"],
                _branchoffice_edition_branch_edition_branch_component__WEBPACK_IMPORTED_MODULE_25__["EditionBranchComponent"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map