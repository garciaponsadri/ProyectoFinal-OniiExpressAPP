import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto, tProducto } from 'src/app/models/Productos/producto';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})

export class AddProductComponent implements OnInit {
  titulo = 'Crear Producto'
  productForm: FormGroup;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
    private productoService: ProductoService
  ) {
    this.productForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      NotaMedia: ['', Validators.required],
      precio: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.crearProducto()
  }

  crearProducto() {
    console.log("a")
      const Product = new Producto (this.productForm.get('id')?.value, this.productForm.get('nombre')?.value, "varios", this.productForm.get('precio')?.value, this.productForm.get('NotaMedia')?.value, [])
      console.log(Product)
      this.productoService.addProducto(Product).subscribe()
      this.productForm.reset()
  }
}
