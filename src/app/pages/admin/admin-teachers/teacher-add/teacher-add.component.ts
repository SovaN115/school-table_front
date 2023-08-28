import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TeacherDTO } from 'src/app/services/teachers/teacherDTO';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'app-teacher-add',
  templateUrl: './teacher-add.component.html',
  styleUrls: ['./teacher-add.component.css']
})
export class TeacherAddComponent {

  templateId: number = 0;

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    patronymic: new FormControl('')
  });

  constructor(private teachersService: TeachersService, private location: Location, private router: ActivatedRoute) {
    router.params.subscribe((params) => {
      this.templateId = params['templateId']
    })
    
  }

  onSubmit(): void {
    const teacher: TeacherDTO = {name: this.form.value.name, surname: this.form.value.surname, patronymic: this.form.value.patronymic, template_id: this.templateId};

    this.teachersService.create(teacher).subscribe((res: any) => {
      if(res.data){
        this.location.back();
      }
    });
  }
}
