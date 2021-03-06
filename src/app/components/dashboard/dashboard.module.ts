import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ListarProductosComponent } from './list-productos/list-productos.component';

import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import { SharedModulesModule } from '../../components/shared-modules/shared-modules.module';
import { CategoriasComponent } from './categorias/categorias.component';
import { ComparizeComponent } from './comparize/comparize.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NavbarComponent } from './navbar/navbar.component'
/*
import { ChartModule } from 'angular-highcharts';
import { Chart } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
*/
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';
import { AddPedidoComponent } from './add-pedido/add-pedido.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ListarProductosComponent,
    CategoriasComponent,
    ComparizeComponent,
    ProductDetailComponent,
    NavbarComponent,
    AddPedidoComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatGridListModule,
    SharedModulesModule,
    ChartModule,
    HighchartsChartModule,
  ]
})
export class DashboardModule { }
