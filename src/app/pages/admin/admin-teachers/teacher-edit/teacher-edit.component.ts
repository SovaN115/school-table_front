import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeacherDTO } from 'src/app/services/teachers/teacherDTO';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'app-teacher-edit',
  templateUrl: './teacher-edit.component.html',
  styleUrls: ['./teacher-edit.component.css']
})
export class TeacherEditComponent {
  id: string = '';
  templateId: number = 0;

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    patronymic: new FormControl('')
  });

  constructor(private teachersService: TeachersService, private router: ActivatedRoute, private location: Location) {
    router.params.subscribe((params => {
      this.id = params['teacherId'];
      this.templateId = params['templateId']
    }))
  }

  onSubmit(): void {
    const id: string = this.id;
    const teacher: TeacherDTO = {name: this.form.value.name, surname: this.form.value.surname, patronymic: this.form.value.patronymic, template_id: this.templateId};

    this.teachersService.patch(teacher, id).subscribe(res => {
      if(res === null) {
        this.location.back();
      }
    });
  }
}
