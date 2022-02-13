import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto, tProducto } from 'src/app/models/Productos/producto';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-add-productos',
  templateUrl: './add-productos.component.html',
  styleUrls: ['./add-productos.component.css']
})

export class AddProductosComponent implements OnInit {
  titulo = 'Crear Producto'
  productForm: FormGroup;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
    private productoService: ProductoService
  ) {
    this.productForm = this.fb.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      telefono: ['', Validators.required],
      numero: ['', Validators.required],
      calle: ['', Validators.required],
      capital: ['', Validators.required],
      ingresos: ['', Validators.required],
      comercial: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.crearProducto()
  }

  crearProducto() {
      const Product = new Producto (this.productForm.get('dni')?.value, this.productForm.get('nombre')?.value, this.productForm.get('categoria')?.value, this.productForm.get('precio')?.value, this.productForm.get('nota')?.value, this.productForm.get('nota')?.value,)
      this.productoService.addProducto(Product).subscribe()
      this.productForm.reset()
  }
}
