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
    this._productoService.getProductos().subscribe(
      (result: any) => {
        this.listProductos = result.map((product: any) => {
          if (product._CategoriaProducto == 'Ropa') {
            return new Ropa(
              product._id,
              product._NombreProducto,
              product._CategoriaProducto,
              product._Precio,
              product._NotaMedia,
              product._Almacenamiento,
              product._Talla
            );
          } else if (product._CategoriaProducto == 'Movil') {
            return new Movil(
              product._id,
              product._NombreProducto,
              product._CategoriaProducto,
              product._Precio,
              product._NotaMedia,
              product._Almacenamiento,
              product._GBRam,
              product._Megapixeles
            );
          } else if (product._CategoriaProducto == 'Procesador') {
            return new procesador(
              product._id,
              product._NombreProducto,
              product._CategoriaProducto,
              product._Precio,
              product._NotaMedia,
              product._Almacenamiento,
              product._GHz
            );
          } else {
            return new Producto(
              product._id,
              product._NombreProducto,
              product._CategoriaProducto,
              product._Precio,
              product._NotaMedia,
              product._Almacenamiento
            );
          }
        });
        console.log(this.listProductos);

        // Creamos los objetos y usamos un método para representar el valor devuelto
        const dataSeries = this.listProductos.map(
          (x: Producto) => x._NombreProducto
        );
        const dataCategorias = this.listProductos.map((x: Producto) =>
          x.calculoPrecio()
        );
        if (
          dataSeries != undefined &&
          dataCategorias != undefined &&
          this.chartOptions.series != undefined &&
          this.chartOptions.xAxis != undefined
        ) {
          this.chartOptions.series[0]['data'] = dataCategorias;
          this.chartOptions.xAxis['categories'] = dataSeries;
          this.chartOptions.title['text'] = 'Nota Media';
          this.chartOptions.series['name'] = 'Personas';
          Highcharts.chart('miGrafico02', this.chartOptions);
        }
      },
      (error) => console.log(error)
    );
  }
}
