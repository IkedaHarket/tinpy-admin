import { Usuario } from "./auth.interface";
import { Direccion } from "./direccion.interface";
import { Estrella } from "./estrellas.interface";

export interface RespShops {
    ok:       boolean;
    negocios: Shop[];
}

export interface Shop {
    _id:         string;
    usuario:     Usuario;
    tipoNegocio: TipoNegocio;
    img:         string;
    nombre:      string;
    estrellas:   Estrella[];
    direccion ?:   Direccion;
    estado:      boolean;
    verificado:  boolean;
    telefono:    string;
    correo:      string;
    descripcion: string;
    createdAt:   Date;
    updatedAt:   Date;
    __v:         number;
}
export interface TipoNegocio {
    _id:    string;
    nombre: string;
}