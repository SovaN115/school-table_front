import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import Lesson from 'src/app/services/lessons/lesson';
import { LessonDTO} from 'src/app/services/lessons/lessonDTO';
import { LessonsService } from 'src/app/services/lessons/lessons.service';
import Teacher from 'src/app/services/teachers/teacher';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'app-lesson-edit',
  templateUrl: './lesson-edit.component.html',
  styleUrls: ['./lesson-edit.component.css']
})
export class LessonEditComponent {

  private id: string = '';
  teachers: Teacher[] = [];
  templateId: number = 0;

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    teacherId: new FormControl('')
  });

  constructor(private router: ActivatedRoute, private lessonsService: LessonsService, private teachersService: TeachersService, private location: Location){
    router.params.subscribe(params => {
      this.id = params['lessonId'];
      this.templateId = params['templateId']
    });

    this.teachersService.getAll(this.templateId).subscribe(data => {
      this.teachers = data;
    })
  }

  onSubmit(){
    const id: string = this.id;
    const name: string = this.form.value.name;
    const teacherId: string = this.form.value.teacherId;
    const newLesson: LessonDTO = {id: +id, name: name, teacher: {id: +teacherId}, template_id: this.templateId};

    this.lessonsService.patch(newLesson, id).subscribe(res => {
      if(res === null) {
        this.location.back();
      }
    });
  }
}
