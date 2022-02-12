import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ListProductosComponent } from './list-productos/list-productos.component';

import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import { SharedModulesModule } from '../../components/shared-modules/shared-modules.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ComparizeComponent } from './comparize/comparize.component'

@NgModule({
  declarations: [
    DashboardComponent,
    ListProductosComponent,
    NavbarComponent,
    CategoriasComponent,
    ComparizeComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatTableModule,
    MatGridListModule,
    SharedModulesModule
  ]
})
export class DashboardModule { }
