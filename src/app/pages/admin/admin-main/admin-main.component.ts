import { Component } from '@angular/core';
import { Template } from 'src/app/services/template/template';
import { TemplateService } from 'src/app/services/template/template.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent {
  templates: Template[] = [];

  constructor(public templatesService: TemplateService) {
    
    this.update();

  }

  update(): void{
    this.templatesService.getAll().subscribe((data) => {
      this.templates = data.data;
    });
  }
}
