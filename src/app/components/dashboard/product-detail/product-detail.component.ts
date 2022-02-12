import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from '../../../services/producto.service'
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  MiProducto: Producto = {
    _id: 0,
    _NombreProducto: "",
    _Almacenamiento: [],
    _CategoriaProducto: "",
    _NotaMedia: 0,
    _Precio: 0
  }
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
       console.log("Información: "+data)
     }, error => {
       console.log(error)
     })
   }
   console.log("Obtenido:"+this.MiProducto)
  }
}
