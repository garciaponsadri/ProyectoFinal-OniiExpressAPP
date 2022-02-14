import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { procesador } from 'src/app/models/Productos/procesador';
import { ProductoService } from 'src/app/services/producto.service';
@Component({
  selector: 'app-add-procesador',
  templateUrl: './add-procesador.component.html',
  styleUrls: ['./add-procesador.component.css']
})

export class AddProcesadorComponent implements OnInit {
  titulo = 'Crear Procesador'
  procesadorForm: FormGroup;
  id: string | null;
  
  constructor(
    private fb: FormBuilder,
    private aRouter: ActivatedRoute,
    private productoService: ProductoService
  ) {
    this.procesadorForm = this.fb.group({
      id: ['', Validators.required],
      nombre: ['', Validators.required],
      NotaMedia: ['', Validators.required],
      precio: ['', Validators.required],
      ghz: ['', Validators.required]
    })
    this.id = this.aRouter.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
  //  this.crearProducto()
  }

  crearProcesador() {
    if(this.procesadorForm.get('id')?.value!==undefined && this.procesadorForm.get('nombre')?.value !== undefined && this.procesadorForm.get('precio')?.value !== undefined && this.procesadorForm.get('NotaMedia')?.value !== undefined && this.procesadorForm.get('ghz')?.value !== undefined) {
      const miProcesador = new procesador (this.procesadorForm.get('id')?.value, this.procesadorForm.get('nombre')?.value, "varios", this.procesadorForm.get('precio')?.value, this.procesadorForm.get('NotaMedia')?.value, [], this.procesadorForm.get('ghz')?.value)
      this.productoService.addProcesador(miProcesador).subscribe()
      this.procesadorForm.reset()
    }
  }
}

