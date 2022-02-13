import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './productsCreation/add-product/add-product.component';
import { AdministrationComponent } from './administration.component';
import { ProductosComponent } from './productos/productos.component';
import { AddMovilComponent } from './productsCreation/add-movil/add-movil.component';
import { AddProcesadorComponent } from './productsCreation/add-procesador/add-procesador.component';
import { AddRopaComponent } from './productsCreation/add-ropa/add-ropa.component';

const routes: Routes = [
  {path: '', component: AdministrationComponent, children: [
    { path: '', component: ProductosComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'add-productos', component: AddProductComponent},
    { path: 'add-movil', component: AddMovilComponent},
    { path: 'add-procesador', component: AddProcesadorComponent},
    { path: 'add-ropa', component: AddRopaComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {
 }
