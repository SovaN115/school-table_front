import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Table } from 'src/app/services/table/table';

@Component({
  selector: '[user-table-row]',
  templateUrl: './row.component.html',
  styleUrls: ['./row.component.css']
})
export class MainRowComponent {
  @Input() index: number = 0;
  @Input() data: Table  = {
    class: {
      id: 0,
      name: '',
      number_of_students: 0
    },
    day: {
      id: 0,
      day: ''
    },
    sections: [{
      section_id: 0,
      call: {
        id: 0,
        lesson_number: '',
        lesson_start: '',
        lesson_finish: '',
        break: ''
      },
      teacher: {
        id: 0,
        name: '',
        surname: '',
        patronymic: ''
      },
      lesson: {
        teacherLessonsId: 0,
        teacherId: 0,
        lessonId: 0,
        teacherName: '',
        lesson: '',
        teacherSurname: '',
        teacherPatronymic: ''
      },
       cabinet: {
        id: 0,
        room: ''
      }
    }]
  };
  @Input() days: number = 0;
}
