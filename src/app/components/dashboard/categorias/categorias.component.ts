import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { ProductoService } from '../../../services/producto.service';
import { Producto } from 'src/app/models/Productos/producto';
import { procesador } from 'src/app/models/Productos/procesador';
import { Movil } from 'src/app/models/Productos/movil';
import { Ropa } from 'src/app/models/Productos/ropa';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: any = {
    chart: {
      backgroundColor: {
        linearGradient: [500, 500, 500, 500],
        stops: [[0, 'rgb(255, 255, 255)']],
      },
      type: 'column',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: [],
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: '',
        data: [],
      },
    ],
  };

  constructor(private _productoService: ProductoService) {}
  listProductos: Producto[] = [];
  ngOnInit(): void {
    this.getMisDatos();
  }

  //SeriesOptionsType
  getMisDatos() {
    this._productoService.getPrecios().subscribe(
      (result: any) => {
        this.listProductos = result.map((product: any) => {
          return new Producto(product._id, product._NombreProducto, product._CategoriaProducto, product._PrecioBase, product._NotaMedia, product._Almacenamiento);
        });
        console.log(this.listProductos)

// Creamos los objetos y usamos un método para representar el valor devuelto
        console.log(this.listProductos)
        const dataSeries = this.listProductos.map((x: Producto) => x._NombreProducto);
        const dataCategorias = this.listProductos.map((x: Producto) => x._PrecioBase);
        if(dataSeries!=undefined && dataCategorias !=undefined && this.chartOptions.series!=undefined && this.chartOptions.xAxis!=undefined) {
          this.chartOptions.series[0]["data"] = dataCategorias;
          this.chartOptions.xAxis["categories"] = dataSeries;
          console.log(this.chartOptions.series[0]["data"])
          console.log(this.chartOptions.xAxis["categories"])
        this.chartOptions.title["text"] = "Precio Media";
        this.chartOptions.series["name"] = "Personas"
        Highcharts.chart("miGrafico02", this.chartOptions);
        }
      },
      error => console.log(error)
    );
  }
}
