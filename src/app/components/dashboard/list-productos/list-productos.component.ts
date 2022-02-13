import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {ProductoService } from '../../../services/producto.service'
import { Producto } from 'src/app/models/Productos/producto';
/**
 * @title Table with filtering
 */

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.css']
})

export class ListarProductosComponent implements OnInit {

  loading = true;
  listProductos: Producto[] = [];

  displayedColumns = ['id', 'nombre', 'categoria', 'precio', 'nota', 'metodos'];
  dataSource!: MatTableDataSource<any>;

  constructor(private _productoService: ProductoService,
    private _snackBar: MatSnackBar,
    private _changeDetectorRefs: ChangeDetectorRef,
    private _router: Router) { }

  ngOnInit(): void {
    this._productoService.getProductos().subscribe(data => {
      this.listProductos = data,
        this.dataSource = new MatTableDataSource(this.listProductos);
      this.loading = false;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  /*

  editProducto(id: number) {
    this._router.navigate(['/dashboard/crear-producto', id]);
    console.log(id);
  }*/

} 