import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModulesModule } from '../../components/shared-modules/shared-modules.module'
import { NavbarComponent  } from './navbar/navbar.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import {AdministrationComponent } from './administration.component';
import { ProductosComponent } from './productos/productos.component';
import { AddProductosComponent } from './add-productos/add-productos.component';
import { AddProductComponent } from './productsCreation/add-product/add-product.component';
@NgModule({
  declarations: [
    NavbarComponent,
    AdministrationComponent,
    ProductosComponent,
    AddProductosComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    SharedModulesModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
