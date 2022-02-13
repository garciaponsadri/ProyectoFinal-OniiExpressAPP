export class Producto {
    _id: number;
    _NombreProducto: string;
    _CategoriaProducto: string;
    _Precio: number;
    _NotaMedia: number;
    _Almacenamiento: [];

    public constructor(id: number, nombre: string, categoria: string, precio: number, notaMedia: number, almacenamiento: [] ){
        this._id=id;
        this._NombreProducto = nombre;
        this._CategoriaProducto = categoria;
        this._Precio = precio;
        this._NotaMedia = notaMedia
        this._Almacenamiento = almacenamiento
    }

    get id() {
        return this._id;
      } 
      get NombreProducto() {
        return this._NombreProducto;
      }
    
      get CategoriaProducto() {
        return this._CategoriaProducto;
      }

      get Precio() {
        return Math.round(this._Precio);
      }

      get NotaMedia() {
        return Math.round(this._NotaMedia);
      }

      get Almacenamiento() {
        return this._Almacenamiento;
      }
}