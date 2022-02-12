export class Producto {
    _id?: number;
    _NombreProducto: string;
    _CategoriaProducto: string;
    _Precio: number;
    _NotaMedia: number;
    _Almacenamiento: [];

    constructor(nombre: string, categoria: string, ubicacion: string, precio: number, notaMedia: number, almacenamiento: [] ){
        this._NombreProducto = nombre;
        this._CategoriaProducto = categoria;
        this._Precio = precio;
        this._NotaMedia = notaMedia
        this._Almacenamiento = almacenamiento
    }
}