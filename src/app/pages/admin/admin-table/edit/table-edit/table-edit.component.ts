import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cabinet } from 'src/app/services/cabinets/cabinet';
import { CabinetsService } from 'src/app/services/cabinets/cabinets.service';
import Lesson from 'src/app/services/lessons/lesson';
import { LessonsService } from 'src/app/services/lessons/lessons.service';
import { Table } from 'src/app/services/table/table';
import { TableService } from 'src/app/services/table/table.service';
import { TableDTO } from 'src/app/services/table/tableDTO';
import { TemplateService } from 'src/app/services/template/template.service';

@Component({
  selector: 'app-table-edit',
  templateUrl: './table-edit.component.html',
  styleUrls: ['./table-edit.component.css']
})
export class TableEditComponent {

  sectionId: number = 0;
  templateId: number = 0;

  lessons: Lesson[] = [];
  cabinets: Cabinet[] = [];
  rows: Table[] = [];
  error: boolean = false;
  message: string = ''

  form: FormGroup = new FormGroup({
    lesson: new FormControl(),
    cabinet: new FormControl()
  })

  constructor(private lessonsService: LessonsService, private cabinetsServise: CabinetsService, private tableService: TableService, private location: Location, private router: ActivatedRoute){
    router.params.subscribe((params) => {
      this.sectionId = params['sectionId'];
      this.templateId = params['templateId'];

      lessonsService.getAll(this.templateId).subscribe((data) => {
        this.lessons = data
      })

      cabinetsServise.getAll(this.templateId).subscribe((data) => {
        this.cabinets = data.data
      })
    });

    this.tableService.getAll(this.templateId).subscribe((data) => {
      this.rows = data.data;
    });


  }

  onSubmit(): void {

    let table: TableDTO = {lesson_id: this.form.value.lesson, cabinet_id: this.form.value.cabinet}
    let teacher: any;
    let target: any;

    this.lessonsService.getOne(this.form.value.lesson).subscribe((lesson) => {
      teacher = lesson.teacher?.id;

      for(let i = 0; i < this.rows.length; i++) {
        for (let j = 0; j < this.rows[i].sections.length; j++) {
          const element = this.rows[i].sections[j];
  
          if(element.section_id == this.sectionId) {
            target = {day: this.rows[i].day.id, lesson: this.rows[i].sections[j].call.lesson_number};
            console.log(target)
            break;
          } 
          
        }
      }
  
      for(let i = 0; i < this.rows.length; i++) {
        let flag = false;
        for (let j = 0; j < this.rows[i].sections.length; j++) {
  
          if(this.rows[i].day.id == target.day && this.rows[i].sections[j].call.lesson_number == target.lesson && this.rows[i].sections[j].lesson.teacher?.id == teacher) { 
            flag = true;
            this.showError('Невозможно поставить этого учителя')
            break;
          }

          if(this.rows[i].day.id == target.day && this.rows[i].sections[j].call.lesson_number == target.lesson && this.rows[i].sections[j].cabinet.id == table.cabinet_id) { 
            flag = true;
            this.showError('Этот кабинет уже занят')
            break;
          }

          if(i == this.rows.length - 1 && j == this.rows[i].sections.length - 1) {
            this.tableService.patch(table, this.sectionId.toString()).subscribe(() => {
              this.location.back()
            })
          }
        }
        if(flag) {
          break;
        }
      }
    })
    
  }

  showError(message: string) {
    this.error = true;
    this.message = message;
  }
}
