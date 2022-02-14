import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Movil } from 'src/app/models/Productos/movil';
import { Producto, tProducto } from 'src/app/models/Productos/producto';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-add-movil',
  templateUrl: './add-movil.component.html',
  styleUrls: ['./add-movil.component.css']
})

export class AddMovilComponent implements OnInit {
  titulo = 'Crear Movil'
  movilForm: FormGroup;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
    private productoService: ProductoService
  ) {
    this.movilForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      NotaMedia: ['', Validators.required],
      precio: ['', Validators.required],
      megapixeles: ['', Validators.required],
      gbram: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
  //  this.crearProducto()
  }

  crearProducto() {
    if(this.movilForm.get('id')?.value!==undefined && this.movilForm.get('nombre')?.value !== undefined && this.movilForm.get('precio')?.value !== undefined && this.movilForm.get('NotaMedia')?.value !== undefined  && this.movilForm.get('megapixeles')?.value !== undefined && this.movilForm.get('gbram')?.value !== undefined) {
      const Product = new Movil (this.movilForm.get('id')?.value, this.movilForm.get('nombre')?.value, "Ropa", this.movilForm.get('precio')?.value, this.movilForm.get('NotaMedia')?.value, [], this.movilForm.get('megapixeles')?.value, this.movilForm.get('gbram')?.value)
      this.productoService.addMovil(Product).subscribe()
      this.movilForm.reset()
    }
  }
}
