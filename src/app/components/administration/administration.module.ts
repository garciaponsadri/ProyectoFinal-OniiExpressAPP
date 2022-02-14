import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModulesModule } from '../../components/shared-modules/shared-modules.module'
import { NavbarComponent  } from './navbar/navbar.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import {AdministrationComponent } from './administration.component';
import { ProductosComponent } from './productos/productos.component';
import { AddProductComponent } from './productsCreation/add-product/add-product.component';
import { AddMovilComponent } from './productsCreation/add-movil/add-movil.component';
import { AddProcesadorComponent } from './productsCreation/add-procesador/add-procesador.component';
import { AddRopaComponent } from './productsCreation/add-ropa/add-ropa.component';

@NgModule({
  declarations: [
    NavbarComponent,
    AdministrationComponent,
    ProductosComponent,
    AddProductComponent,
    AddMovilComponent,
    AddProcesadorComponent,
    AddRopaComponent
  ],
  imports: [
    CommonModule,
    SharedModulesModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
