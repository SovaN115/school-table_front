import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LessonDTO } from 'src/app/services/lessons/lessonDTO';
import { LessonsService } from 'src/app/services/lessons/lessons.service';
import Teacher from 'src/app/services/teachers/teacher';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'app-lesson-add',
  templateUrl: './lesson-add.component.html',
  styleUrls: ['./lesson-add.component.css']
})
export class LessonAddComponent {

  teachers: Teacher[] = [];
  templateId: number = 0;

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    teacherId: new FormControl('')
  });

  constructor(private lessonsService: LessonsService, private teachersService: TeachersService, private location: Location, private router: ActivatedRoute) {
    router.params.subscribe((params) => {
      this.templateId = params['templateId']
    })

    this.teachersService.getAll(this.templateId).subscribe(data => {
      this.teachers = data;
    })

  }

  onSubmit(){
    const name: string = this.form.value.name;
    const teacherId: string = this.form.value.teacherId;
    const lesson: LessonDTO = {name: name, teacher: {id: +teacherId}, template_id: this.templateId};

    this.lessonsService.create(lesson).subscribe((res: any) => {
      if(res.data) {
        this.location.back();
      }
    });
  }
}
