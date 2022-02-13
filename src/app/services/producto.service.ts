import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url='https://oniiexpressapi.herokuapp.com/Productos'
  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get(`${this.url}/get`);
  }

  searchProductos(id: number): Observable<any> {
    return this.http.get(`${this.url}/search/${id}`);
  }

  deleteProducto(id: number): Observable<any> {
    return this.http.delete(`${this.url}/delete:${id}`)
  }

  addProducto(producto: Producto) {
    return this.http.post(`${this.url}/add`, producto)
  }
}
