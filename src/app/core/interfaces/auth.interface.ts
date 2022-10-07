export interface RespAuth {
    ok?:      boolean;
    usuario?: Usuario;
    token?:   string;
}

export interface Usuario {
    correo?:     string;
    rol?:        string;
    verify?:     boolean;
    estado?:     boolean;
    googleAuth?: boolean;
    createdAt?:  Date;
    updatedAt?:  Date;
    uid?:        string;
}
