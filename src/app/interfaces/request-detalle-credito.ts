import {DetalleCredito} from './detalle-credito';

export interface RequestDetalleCredito {
    message: string;
    result: boolean;
    data: DetalleCredito;
}
