import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModulesModule } from '../../components/shared-modules/shared-modules.module'
import { NavbarComponent  } from './navbar/navbar.component';
import { AdministrationRoutingModule } from './administration-routing.module';
import {AdministrationComponent } from './administration.component'
@NgModule({
  declarations: [
    NavbarComponent,
    AdministrationComponent
  ],
  imports: [
    CommonModule,
    SharedModulesModule,
    AdministrationRoutingModule
  ]
})
export class AdministrationModule { }
