import { Location } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TemplateService } from 'src/app/services/template/template.service';
import { TemplateDTO } from 'src/app/services/template/templateDTO';

@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.css']
})
export class TemplateCardComponent {
  @Input() name: string = '';
  
  @Input() id: number = 0;
  @Input() is_selected: number | null = 0;
  @Output() deleted: EventEmitter<any> = new EventEmitter();

  constructor(private templateService: TemplateService, private location: Location) {}

  delete() {
    this.templateService.delete(this.id.toString()).subscribe(
      () => {
        this.deleted.emit();
      }
    )
  }

  apply(){
    this.templateService.apply(this.id.toString()).subscribe(
      () => {
        this.deleted.emit();
      }
    )
  }

}
