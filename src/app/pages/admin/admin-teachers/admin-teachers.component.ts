import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Teacher from 'src/app/services/teachers/teacher';
import { TeachersService } from 'src/app/services/teachers/teachers.service';

@Component({
  selector: 'app-admin-teachers',
  templateUrl: './admin-teachers.component.html',
  styleUrls: ['./admin-teachers.component.css']
})
export class AdminTeachersComponent{
  teachers: Teacher[] = [];
  templateId: number = 0;

  constructor(public teachersService: TeachersService, private router: ActivatedRoute) {
    
    this.router.params.subscribe((params) => {
      this.templateId = params['templateId'];
    })
    
    this.update();

  }

  update(): void{
    this.teachersService.getAll(this.templateId).subscribe((data) => {
      this.teachers = data;
    });
  }

}
