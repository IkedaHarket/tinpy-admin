export interface Product {
    dislikes:        any[];
    _id:             string;
    negocio:         string;
    nombre:          string;
    precio:          number;
    descripcion:     string;
    numeroLikes:     number;
    likes:           string[];
    estado:          boolean;
    imagenPrincipal: string;
    categoria:       Categoria;
    createdAt:       Date;
    updatedAt:       Date;
    __v:             number;
}

export interface Categoria {
    _id:    string;
    nombre: string;
}
