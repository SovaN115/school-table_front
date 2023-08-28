import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CallDTO } from 'src/app/services/calls/callDTO';
import { CallsService } from 'src/app/services/calls/calls.service';

@Component({
  selector: '[main-call]',
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

  constructor(private callsService: CallsService, private router: ActivatedRoute) {
  }


  show(value: string | null) {
    if(value === null) {
      return '';
    } 
    return value.slice(0, 5);
  }
}
