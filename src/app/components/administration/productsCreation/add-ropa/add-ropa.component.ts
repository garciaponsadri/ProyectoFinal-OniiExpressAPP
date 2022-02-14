import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ropa } from 'src/app/models/Productos/ropa';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-add-ropa',
  templateUrl: './add-ropa.component.html',
  styleUrls: ['./add-ropa.component.css']
})

export class AddRopaComponent implements OnInit {
  titulo = 'Crear Ropa'
  ropaForm: FormGroup;
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
    private productoService: ProductoService
  ) {
    this.ropaForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      NotaMedia: ['', Validators.required],
      precio: ['', Validators.required],
      talla: ['', Validators.required],
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
  //  this.crearProducto()
  }

  crearRopa() {
    if(this.ropaForm.get('id')?.value!==undefined && this.ropaForm.get('nombre')?.value !== undefined && this.ropaForm.get('precio')?.value !== undefined && this.ropaForm.get('NotaMedia')?.value !== undefined) {
      const Product = new Ropa (this.ropaForm.get('id')?.value, this.ropaForm.get('nombre')?.value, "ropa", this.ropaForm.get('precio')?.value, this.ropaForm.get('NotaMedia')?.value, [], this.ropaForm.get('talla')?.value)
      this.productoService.addRopa(Product).subscribe()
      this.ropaForm.reset()
    }
  }
}

