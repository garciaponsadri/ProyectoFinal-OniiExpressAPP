import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosListComponent } from './components/empleados-list/empleados-list.component';
import { EmpleadosCreateComponent } from './components/empleados-create/empleados-create.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosListComponent,
    EmpleadosCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
