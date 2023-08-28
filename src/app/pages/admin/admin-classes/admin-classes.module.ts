import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassEditComponent } from './class-edit/class-edit.component';
import { ClassAddComponent } from './class-add/class-add.component';
import { AdminClassesComponent } from './admin-classes.component';
import { ClassComponent } from './components/class/class.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ClassEditComponent,
    ClassAddComponent,
    AdminClassesComponent,
    ClassComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminClassesModule { }
