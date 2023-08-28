import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CallDTO } from 'src/app/services/calls/callDTO';
import { CallsService } from 'src/app/services/calls/calls.service';

@Component({
  selector: '[admin-call]',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.css']
})
export class CallComponent {

  @Input() id: number = 0;
  @Input() lesson: string = '';
  @Input() start: string = '';
  @Input() finish: string = '';
  @Input() break: string = '';
  templateId: number = 0;

  @Output() updated: EventEmitter<any> = new EventEmitter();

  showStartInput: boolean = false;
  showFinishInput: boolean = false;
  showBreakInput: boolean = false;

  lessonInput: FormControl = new FormControl();
  startInput: FormControl = new FormControl();
  finishInput: FormControl = new FormControl();
  breakInput: FormControl = new FormControl();

  constructor(private callsService: CallsService, private router: ActivatedRoute) {
    this.router.params.subscribe((params) => {
      this.templateId = params['templateId'];
    })
  }

  openStartInput(){
    this.showStartInput = !this.showStartInput;
  }

  openFinishInput(){
    this.showFinishInput = !this.showFinishInput;
  }

  openBreakInput(){
    this.showBreakInput = !this.showBreakInput;
  }

  updateStart() {
    this.callsService.patch({lesson_start: this.startInput.value, template_id: this.templateId}, this.id.toString()).subscribe(() => {
      this.showStartInput = !this.showStartInput;
      this.updated.emit();
    });
  }

  updateFinish() {
    this.callsService.patch({lesson_finish: this.finishInput.value, template_id: this.templateId}, this.id.toString()).subscribe(() => {
      this.showFinishInput = !this.showFinishInput;
      this.updated.emit();
    });
  }

  updateBreak() {
    this.callsService.patch({break: this.breakInput.value, template_id: this.templateId}, this.id.toString()).subscribe(() => {
      this.showBreakInput = !this.showBreakInput;
      this.updated.emit();
    });
  }

  show(value: string | null) {
    if(value === null) {
      return 'Введите значение'
    } 
    return value.slice(0, 5);
  }
}
