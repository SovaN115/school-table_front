import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GroupsService } from 'src/app/services/groups/groups.service';

@Component({
  selector: '[admin-class]',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent {
  
  @Input() id: number = 0;
  @Input() name: string = '';
  @Input() numberOfStudents: number = 0;
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor(private groupsService: GroupsService){}

  onDelete(){
    this.groupsService.delete(this.id.toString()).subscribe(() => {
      this.delete.emit();
    });
  }

}
