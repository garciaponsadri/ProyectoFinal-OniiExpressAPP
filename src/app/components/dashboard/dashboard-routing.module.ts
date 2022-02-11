import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ListProductosComponent } from './list-productos/list-productos.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: '/listar', component: ListProductosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
 }
