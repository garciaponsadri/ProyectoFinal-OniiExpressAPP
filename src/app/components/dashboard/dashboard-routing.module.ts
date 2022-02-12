import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListarProductosComponent } from './list-productos/list-productos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ComparizeComponent } from './comparize/comparize.component';

const routes: Routes = [
  {path: '', component: DashboardComponent, children: [
    { path: '', component: ListarProductosComponent},
    { path: 'categorias', component: CategoriasComponent},
    { path: 'comparar', component: ComparizeComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
 }
