import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminMainComponent } from './admin-main.component';
import { TemplateCardComponent } from './template-card/template-card.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TemplateAddComponent } from './template-add/template-add.component';

@NgModule({
  declarations: [
    AdminMainComponent,
    TemplateCardComponent,
    TemplateAddComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    AdminMainComponent,
    TemplateCardComponent
  ]
})
export class AdminMainModule { }
