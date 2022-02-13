import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Productos/producto';
import { ProductoService } from '../../../services/producto.service'
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { tProducto } from 'src/app/models/Productos/producto';
import { Ropa } from 'src/app/models/Productos/ropa';
import { Movil } from 'src/app/models/Productos/movil';
import { procesador } from 'src/app/models/Productos/procesador';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit {
  MiProducto: any
  PrecioFinal: any
  constructor(private _productoService: ProductoService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.obtenerProducto();
   }
 
   obtenerProducto() {
    const id = this.route.snapshot.paramMap.get("id");
    console.log("Id del coso:"+id)
    if(id!=null) {
     this._productoService.searchProductos(parseInt(id)).subscribe(data => {
       console.log(data);
       this.MiProducto = data;
       if(data._CategoriaProducto=="Ropa") {
         this.MiProducto = new Ropa(data._id, data._NombreProducto, data._CategoriaProducto, data._PrecioBase, data._NotaMedia, data._Almacenamiento, data._Talla)
       } else if(data._CategoriaProducto=="Movil") {
        this.MiProducto = new Movil(data._id, data._NombreProducto, data._CategoriaProducto, data._PrecioBase, data._NotaMedia, data._Almacenamiento, data._GBRam, data._Megapixeles)
      } else if (data._CategoriaProducto=="Procesador") {
        this.MiProducto = new procesador(data._id, data._NombreProducto, data._CategoriaProducto, data._PrecioBase, data._NotaMedia, data._Almacenamiento, data._GHz)
      } else {
        this.MiProducto = new Producto(data._id, data._NombreProducto, data._CategoriaProducto, data._PrecioBase, data._NotaMedia, data._Almacenamiento)
      }
      this.PrecioFinal = this.MiProducto.calculoPrecio()
       console.log("Información: "+data)
     }, error => {
       console.log(error)
     })
   }
   console.log("Obtenido:"+this.MiProducto)
  }
}
