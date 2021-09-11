import { Injectable } from '@angular/core';
import {RequestDetalleCredito} from '../interfaces/request-detalle-credito';
import {DetalleCredito} from '../interfaces/detalle-credito';

@Injectable({
    providedIn: 'root'
})
export class ServicesDetalleCreditoService {
    public ObjDetalleCredito: DetalleCredito = {} as DetalleCredito;
    constructor() { }
}
