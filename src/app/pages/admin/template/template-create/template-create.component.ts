
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TemplateService } from 'src/app/services/template/template.service';
import { TemplateDTO } from 'src/app/services/template/templateDTO';

@Component({
  selector: 'app-template-create',
  templateUrl: './template-create.component.html',
  styleUrls: ['./template-create.component.css']
})
export class TemplateCreateComponent {
  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    lessons: new FormControl(''),
    days: new FormControl()
  });

  constructor(private templateService: TemplateService, private location: Location) {}

  onSubmit(): void {
    const template: TemplateDTO = {name: this.form.value.name, days: this.form.value.days, lessons: this.form.value.lessons};

    this.templateService.create(template).subscribe((res: any) => {
      if(res.data){
        this.location.back();
      }
    });
  }
}
