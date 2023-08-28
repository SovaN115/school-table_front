import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/services/groups/group';
import { GroupDTO } from 'src/app/services/groups/groupDTO';
import { GroupsService } from 'src/app/services/groups/groups.service';

@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.css']
})
export class ClassAddComponent {

  templateId: number = 0;
  form: FormGroup = new FormGroup({
    group: new FormControl(''),
    students: new FormControl('')
  });

  constructor(private groupsService: GroupsService, private location: Location, private router: ActivatedRoute){
    router.params.subscribe((params) => {
      this.templateId = params['templateId'];
    });
  }

  onSubmit(){
    const name: string = this.form.value.group;
    const students: number = this.form.value.students;
    const group: GroupDTO = {name: name, number_of_students: students, template_id: this.templateId};
    this.groupsService.create(group).subscribe((res: any) => {
      if(res.data){
        this.location.back();
      }
    });
  }
  
}
