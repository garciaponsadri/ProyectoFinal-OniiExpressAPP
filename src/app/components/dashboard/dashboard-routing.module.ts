import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ListarProductosComponent } from './list-productos/list-productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ComparizeComponent } from './comparize/comparize.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    { path: '', component: ListarProductosComponent},
    { path: 'categorias', component: CategoriasComponent},
   { path: 'producto/detail/:id', component: ProductDetailComponent},
     { path: 'comparar', component: ComparizeComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
 }
