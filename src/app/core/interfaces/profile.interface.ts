import { Usuario } from "./auth.interface";

export interface Profile {
    _id?:         string;
    usuario?:     Usuario;
    nombre?:      string;
    telefono?:    string;
    img?:         string;
    estado?:      boolean;
    descripcion?: string;
    enlace?:      string;
    createdAt?:   Date;
    updatedAt?:   Date;
    __v?:         number;
}