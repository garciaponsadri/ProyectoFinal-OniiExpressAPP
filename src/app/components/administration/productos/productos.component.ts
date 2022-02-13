/**
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}  */

import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

  loading = true;
  listProducts: Producto[] = [];

  displayedColumns = ['id', 'nombre', 'categoria', 'precio', 'nota', 'metodos'];
  dataSource!: MatTableDataSource<any>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _productoService: ProductoService,
    private _snackBar: MatSnackBar,
    private _changeDetectorRefs: ChangeDetectorRef,
    private _router: Router) { }

  ngOnInit(): void {
    this._productoService.getProductos().subscribe(data => {
      this.listProducts = data,
        this.dataSource = new MatTableDataSource(this.listProducts);
      this.loading = false;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteProducto(id: number) {
    this._productoService.deleteProducto(id). subscribe(data => {
        console.log(data);
        this.ngOnInit();
      },
        error => console.log(error));
  }

  addProducto() {
    this._router.navigate(['/administration/add-productos']);
  } /*

  editProducto(id: number) {
    this._router.navigate(['/dashboard/crear-producto', id]);
    console.log(id);
  }*/

} 