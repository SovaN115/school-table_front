import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TemplateComponent } from './template.component';
import { TemplateCreateComponent } from './template-create/template-create.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TemplateComponent,
    TemplateCreateComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class TemplateModule { }
