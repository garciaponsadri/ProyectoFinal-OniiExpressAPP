import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import {ProductoService } from '../../../services/producto.service'
import { Producto } from 'src/app/models/Productos/producto';

@Component({
  selector: 'app-comparize',
  templateUrl: './comparize.component.html',
  styleUrls: ['./comparize.component.css']
})
export class ComparizeComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: any = {
    chart:
    {
      backgroundColor: {
        linearGradient: [500, 500, 500, 500],
        stops: [
          [0, 'rgb(255, 255, 255)'],
        ]
      },
      type: 'column'
    },
    title: {
      text: ''
    },
    xAxis: {
      categories: []
    },
    credits: {
      enabled: false
    },
    series: [{
      name: '',
      data: []
    }]
  };


  constructor(private _productoService: ProductoService) { }
  listProductos: Producto[] = [];
  ngOnInit(): void {
    this.getMisDatos()
  }

  //SeriesOptionsType
  getMisDatos() {
    this._productoService.getProductos()
    .subscribe(
      (result: any) => {
        this.listProductos = result.map((product: any) => {
          return new Producto(product._id, product._NombreProducto, product._CategoriaProducto, product._Precio, product._NotaMedia, product._Almacenamiento);
        });
        console.log(this.listProductos)

// Creamos los objetos y usamos un método para representar el valor devuelto
        const dataSeries = this.listProductos.map((x: Producto) => x._NombreProducto);
        const dataCategorias = this.listProductos.map((x: Producto) => x._NotaMedia);
        if(dataSeries!=undefined && dataCategorias !=undefined && this.chartOptions.series!=undefined && this.chartOptions.xAxis!=undefined) {
        this.chartOptions.series[0]["data"] = dataCategorias;
        this.chartOptions.xAxis["categories"] = dataSeries;
        this.chartOptions.title["text"] = "Nota Media";
        this.chartOptions.series["name"] = "Personas"
        Highcharts.chart("miGrafico01", this.chartOptions);
        }
      },
      error => console.log(error)
    );
  }
}