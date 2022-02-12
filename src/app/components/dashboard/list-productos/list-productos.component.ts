import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {ProductoService } from '../../../services/producto.service'
import { Producto } from 'src/app/models/producto';
/**
 * @title Table with filtering
 */
 @Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})
export class ListarProductosComponent implements OnInit {
  listProductos: Producto[] = [];
  
  constructor(private _productoService: ProductoService) { }

  ngOnInit(): void {
   this.obtenerProductos();
  }

  obtenerProductos() {
    this._productoService.getProductos().subscribe(data => {
      console.log(data);
      this.listProductos = data;
    }, error => {
      console.log(error)
    })
  }
  
}