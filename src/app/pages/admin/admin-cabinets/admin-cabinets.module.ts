import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { CabinetAddComponent } from './cabinet-add/cabinet-add.component';
import { CabinetEditComponent } from './cabinet-edit/cabinet-edit.component';
import { AdminCabinetsComponent } from './admin-cabinets.component';
import { CabinetComponent } from './components/cabinet/cabinet.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    CabinetAddComponent,
    CabinetEditComponent,
    AdminCabinetsComponent,
    CabinetComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
   exports: [

   ]
})
export class AdminCabinetsModule { }
