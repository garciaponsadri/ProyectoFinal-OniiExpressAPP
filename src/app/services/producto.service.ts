import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/Productos/producto';

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

  addProducto(producto: Producto) {
    console.log(producto)
    return this.http.post(`${this.url}/add`, producto)
  }
}
