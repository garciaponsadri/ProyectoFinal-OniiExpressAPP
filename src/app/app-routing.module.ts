import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadosListComponent } from './components/empleados-list/empleados-list.component'
import { EmpleadosCreateComponent } from './components/empleados-create/empleados-create.component'
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: EmpleadosListComponent},
  {path: 'crearEmp', component: EmpleadosCreateComponent},
  {path: 'crearEmp/:id', component: EmpleadosCreateComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }