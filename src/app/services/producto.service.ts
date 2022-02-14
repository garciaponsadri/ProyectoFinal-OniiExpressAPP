import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movil } from '../models/Productos/movil';
import { procesador } from '../models/Productos/procesador';
import { Producto } from '../models/Productos/producto';
import { Ropa } from '../models/Productos/ropa';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url='https://oniiexpressapi.herokuapp.com/Productos'
  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(`${this.url}/get`);
  }

  getPrecios(): Observable<any> {
    return this.http.get(`${this.url}/precios`);
  }

  searchProductos(id: number): Observable<any> { 
    return this.http.get(`${this.url}/search/${id}`);
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete(`${this.url}/delete/${id}`)
  }

  editarProducto(id: string, producto: Producto): Observable<any> {
    return this.http.put(this.url + '/editar/' + id, producto)
  }

  addRopa(ropa: Ropa) {
    console.log("Ropa: ")
    console.log(ropa)
    return this.http.post(`${this.url}/ropa/add/`, ropa)
  }

  addProducto(producto: Producto) {
    console.log("Producto: ")
    console.log(producto)
    return this.http.post(`${this.url}/add`, producto)
  }

  addMovil(movil: Movil) {
    console.log("Movil: ")
    console.log(movil)
    return this.http.post(`${this.url}/movil/add/`, movil)
  }

  addProcesador(procesador: procesador) {
    console.log("Procesador:")
    console.log(procesador)
    return this.http.post(`${this.url}/procesador/add/`, procesador)
  }
}
