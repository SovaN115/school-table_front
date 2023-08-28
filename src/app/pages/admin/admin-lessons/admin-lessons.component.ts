import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Lesson from 'src/app/services/lessons/lesson';
import { LessonsService } from 'src/app/services/lessons/lessons.service';

import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'app-admin-lessons',
  templateUrl: './admin-lessons.component.html',
  styleUrls: ['./admin-lessons.component.css']
})
export class AdminLessonsComponent {
  lessons: Lesson[] = [];
  templateId: number = 0;

  constructor(private lessonsService: LessonsService, private router: ActivatedRoute){

    router.params.subscribe((params) => {
      this.templateId = params['templateId'];
    })

    this.update();
  }

  update(): void{
    this.lessonsService.getAll(this.templateId).subscribe(data => {
      console.log(data)
      this.lessons = data;
    });
  }
}
