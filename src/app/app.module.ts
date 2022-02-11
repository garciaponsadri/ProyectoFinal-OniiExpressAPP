import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosListComponent } from './components/empleados-list/empleados-list.component';
import { EmpleadosCreateComponent } from './components/empleados-create/empleados-create.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModulesModule } from './components/shared-modules/shared-modules.module';

import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosListComponent,
    EmpleadosCreateComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModulesModule,
    MatFormFieldModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }