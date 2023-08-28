import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TeachersService } from 'src/app/services/teachers/teachers.service';


@Component({
  selector: '[admin-teacher]',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() surname: string = '';
  @Input() patronymic: string = '';
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor(private teachersService: TeachersService){}

  onDelete(){
    this.teachersService.delete(this.id.toString()).subscribe(() => {
      this.delete.emit();
    })
  }

}
