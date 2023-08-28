import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/main/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { AdminTableComponent } from './pages/admin/admin-table/admin-table.component';
import { AdminMainComponent } from './pages/admin/admin-main/admin-main.component';
import { AdminComponent } from './pages/admin/admin.component';
import { AdminTeachersComponent } from './pages/admin/admin-teachers/admin-teachers.component';
import { AdminClassesComponent } from './pages/admin/admin-classes/admin-classes.component';
import { AdminLessonsComponent } from './pages/admin/admin-lessons/admin-lessons.component';
import { AdminCabinetsComponent } from './pages/admin/admin-cabinets/admin-cabinets.component';
import { AdminCallsComponent } from './pages/admin/admin-calls/admin-calls.component';
import { TemplateComponent } from './pages/admin/template/template.component';
import { TeacherAddComponent } from './pages/admin/admin-teachers/teacher-add/teacher-add.component';
import { TeacherEditComponent } from './pages/admin/admin-teachers/teacher-edit/teacher-edit.component';
import { ClassAddComponent } from './pages/admin/admin-classes/class-add/class-add.component';
import { ClassEditComponent } from './pages/admin/admin-classes/class-edit/class-edit.component';
import { LessonAddComponent } from './pages/admin/admin-lessons/lesson-add/lesson-add.component';
import { LessonEditComponent } from './pages/admin/admin-lessons/lesson-edit/lesson-edit.component';
import { CabinetAddComponent } from './pages/admin/admin-cabinets/cabinet-add/cabinet-add.component';
import { CabinetEditComponent } from './pages/admin/admin-cabinets/cabinet-edit/cabinet-edit.component';
import { TemplateCreateComponent } from './pages/admin/template/template-create/template-create.component';
import { TableEditComponent } from './pages/admin/admin-table/edit/table-edit/table-edit.component';
import { AuthGuardService } from './services/auth-guard/auth-guard.service';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent, canActivate: [AuthGuardService], children: [
    {path: 'create', component: TemplateCreateComponent},
    {path: '', component: AdminMainComponent},
  ]},
  {path: 'admin/:templateId', component: TemplateComponent, children: [
    {path: 'table', children: [
      {path: ':sectionId/edit', component: TableEditComponent},
      {path: '', component: AdminTableComponent}
    ]},

    {path: 'teachers', children: [
      {path: 'create', component: TeacherAddComponent},
      {path: ':teacherId/edit', component: TeacherEditComponent},
      {path: '', component: AdminTeachersComponent}
    ]},

    {path: 'classes',  children: [
      {path: 'create', component: ClassAddComponent},
      {path: ':classId/edit', component: ClassEditComponent},
      {path: '', component: AdminClassesComponent}
    ]},

    {path: 'lessons', children: [
      {path: 'create', component: LessonAddComponent},
      {path: ':lessonId/edit', component: LessonEditComponent},
      {path: '', component: AdminLessonsComponent}
    ]},

    {path: 'cabinets', children: [
      {path: 'create', component: CabinetAddComponent},
      {path: ':cabinetId/edit', component: CabinetEditComponent},
      {path: '', component: AdminCabinetsComponent}
    ]},

    {path: 'calls', component: AdminCallsComponent},
    {path: '', redirectTo: 'table', pathMatch: 'prefix'}
  ]},
  {path: '', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {paramsInheritanceStrategy: 'always'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
