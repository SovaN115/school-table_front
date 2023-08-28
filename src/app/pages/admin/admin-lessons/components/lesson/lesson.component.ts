import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LessonsService } from 'src/app/services/lessons/lessons.service';

@Component({
  selector: '[admin-lesson]',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent {
  @Input() id: number = 0;
  @Input() lesson: string = '';
  @Input() teacherName: string | undefined = '';
  @Input() teacherSurname: string | undefined = '';
  @Input() teacherPatronymic: string | undefined = '';
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor(private lessonsService: LessonsService) {}

  onDelete(){
    this.lessonsService.delete(this.id.toString()).subscribe(() => {
      this.delete.emit();
    });
  }
}
