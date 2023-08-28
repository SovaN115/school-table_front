import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AdminCabinetsModule } from './admin-cabinets/admin-cabinets.module';
import { AdminCallsModule } from './admin-calls/admin-calls.module';
import { AdminClassesModule } from './admin-classes/admin-classes.module';
import { AdminLessonsModule } from './admin-lessons/admin-lessons.module';
import { AdminTableModule } from './admin-table/admin-table.module';
import { AdminTeachersModule } from './admin-teachers/admin-teachers.module';
import { AdminComponent } from './admin.component';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { AdminMainModule } from './admin-main/admin-main.module';
import { TemplateCardComponent } from './admin-main/template-card/template-card.component';



@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AdminCabinetsModule,
    AdminCallsModule,
    AdminClassesModule,
    AdminLessonsModule,
    AdminTableModule,
    AdminTeachersModule,
    AdminMainModule,
    AppRoutingModule
  ],
  exports: [
    AdminCabinetsModule,
    AdminCallsModule,
    AdminClassesModule,
    AdminLessonsModule,
    AdminTableModule,
    AdminTeachersModule,
    AdminMainComponent
  ]
})
export class AdminModule { }
