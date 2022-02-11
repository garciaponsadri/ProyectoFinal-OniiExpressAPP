import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { ListProductosComponent } from './list-productos/list-productos.component';

import {MatTableModule} from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import { SharedModulesModule } from '../../components/shared-modules/shared-modules.module'

@NgModule({
  declarations: [
    DashboardComponent,
    ListProductosComponent
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
