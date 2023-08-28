import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminTableComponent } from './admin-table.component';
import { RowComponent } from './components/row/row.component';
import { SectionComponent } from './components/section/section.component';
import { TableEditComponent } from './edit/table-edit/table-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    AdminTableComponent,
    RowComponent,
    SectionComponent,
    TableEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  exports: [
    AdminTableComponent,
    RowComponent,
    SectionComponent,
  ]
})
export class AdminTableModule { }
