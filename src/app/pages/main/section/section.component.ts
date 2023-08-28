import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cabinet } from 'src/app/services/cabinets/cabinet';
import { Call } from 'src/app/services/calls/call';
import { LessonDTO } from 'src/app/services/lessons/lessonDTO';
import { TableService } from 'src/app/services/table/table.service';
import { TeacherDTO } from 'src/app/services/teachers/teacherDTO';

@Component({
  selector: '[main-table-section]',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class MainSectionComponent {
  @Input() cabinet: Cabinet = {
    id: 0,
    room: ''
  };
  @Input() lesson: LessonDTO = {
    teacherLessonsId: 0,
    teacherId: 0,
    lessonId: 0,
    teacherName: '',
    lesson: '',
    teacherSurname: '',
    teacherPatronymic: ''
  };
  @Input() call: Call = {
    id: 0,
    lesson_number: '',
    lesson_start: '',
    lesson_finish: '',
    break: ''
  };
  @Input() section_id: number = 0;

  showTeacher(teacher: TeacherDTO | undefined){
    if(teacher == undefined) {
      return ''
    } else {
      return teacher.name! + ' ' +  teacher.surname! + ' ' + teacher.patronymic!;
    }
  }
}
