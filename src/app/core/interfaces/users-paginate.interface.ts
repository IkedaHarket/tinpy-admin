export interface RespUsers {
    ok?:       boolean;
    usuarios?: Usuario[];
}

export interface Usuario {
    correo?:     string;
    rol?:        Rol;
    verify?:     boolean;
    estado?:     boolean;
    googleAuth?: boolean;
    createdAt?:  Date;
    updatedAt?:  Date;
    uid?:        string;
}
export interface Rol {
    _id?:    string;
    nombre?: string;
    __v?:    number;
}