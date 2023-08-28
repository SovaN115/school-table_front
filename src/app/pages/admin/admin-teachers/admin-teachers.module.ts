import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherAddComponent } from './teacher-add/teacher-add.component';
import { TeacherEditComponent } from './teacher-edit/teacher-edit.component';
import { AdminTeachersComponent } from './admin-teachers.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    TeacherAddComponent,
    TeacherEditComponent,
    AdminTeachersComponent,
    TeacherComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    AdminTeachersComponent,
    TeacherAddComponent,
    TeacherEditComponent
  ]
})
export class AdminTeachersModule { }
