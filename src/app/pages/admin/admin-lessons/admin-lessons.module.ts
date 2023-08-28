import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonAddComponent } from './lesson-add/lesson-add.component';
import { LessonEditComponent } from './lesson-edit/lesson-edit.component';
import { AdminLessonsComponent } from './admin-lessons.component';
import { LessonComponent } from './components/lesson/lesson.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LessonAddComponent,
    LessonEditComponent,
    AdminLessonsComponent,
    LessonComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminLessonsModule { }
