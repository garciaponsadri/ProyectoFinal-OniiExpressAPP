import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductosComponent } from './add-productos/add-productos.component';
import { AdministrationComponent } from './administration.component';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {path: '', component: AdministrationComponent, children: [
    { path: '', component: ProductosComponent},
    { path: 'productos', component: ProductosComponent},
    { path: 'add-productos', component: AddProductosComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule {
 }
