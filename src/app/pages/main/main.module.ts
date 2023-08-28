import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateService } from 'src/app/services/template/template.service';
import { MainSectionComponent } from './section/section.component';
import { MainRowComponent } from './row/row.component';
import { AdminCallsModule } from '../admin/admin-calls/admin-calls.module';
import { CallComponent } from './call/call.component';



@NgModule({
  declarations: [
    MainRowComponent,
    MainSectionComponent,
    CallComponent
  ],
  imports: [
    CommonModule,
  ],
  providers: [
    TemplateService
  ], 
  exports: [
    MainRowComponent,
    MainSectionComponent,
    CallComponent
  ]
})
export class MainModule { }
