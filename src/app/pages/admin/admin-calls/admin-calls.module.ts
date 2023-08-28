import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallsAddComponent } from './calls-add/calls-add.component';
import { CallsEditComponent } from './calls-edit/calls-edit.component';
import { AdminCallsComponent } from './admin-calls.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CallComponent } from './components/call/call.component';



@NgModule({
  declarations: [
    CallsAddComponent,
    CallsEditComponent,
    AdminCallsComponent,
    CallComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CallComponent
  ]
})
export class AdminCallsModule { }
