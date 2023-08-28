import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/services/groups/group';
import { GroupDTO } from 'src/app/services/groups/groupDTO';
import { GroupsService } from 'src/app/services/groups/groups.service';

@Component({
  selector: 'app-class-edit',
  templateUrl: './class-edit.component.html',
  styleUrls: ['./class-edit.component.css']
})
export class ClassEditComponent {

  id: string = '';
  templateId: number = 0;
  form: FormGroup = new FormGroup({
    group: new FormControl(''),
    students: new FormControl('')
  });

  constructor(private groupsService: GroupsService, private router: ActivatedRoute, private location: Location){
    router.params.subscribe(params => {
      this.id = params['classId'];
      this.templateId = params['templateId']
    });
  }

  onSubmit(){
    const name: string = this.form.value.group;
    const students: number = this.form.value.students;
    const id: string = this.id;
    const group: GroupDTO = {name: name, number_of_students: students, template_id: this.templateId};
    this.groupsService.patch(group, id).subscribe(res => {
      if(res === null) {
        this.location.back();
      }
    });
  }
}
