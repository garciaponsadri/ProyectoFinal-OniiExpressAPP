/**import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

} */

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

  displayedColumns = ['id', 'nombre', 'calle', 'numero', 'telefono', 'email', 'ventas', 'horas','acciones'];
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

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /*deleteEmpleado(id: number) {
    this._productoService.deleteEmpleado(id). subscribe(data => {
        console.log(data);
        this.ngOnInit();
      },
        error => console.log(error));
  }

  addEmpleado() {
    this._router.navigate(['/dashboard/crear-empleado']);
  }

  editEmpleado(id: number) {
    this._router.navigate(['/dashboard/crear-empleado', id]);
    console.log(id);
  }*/
}