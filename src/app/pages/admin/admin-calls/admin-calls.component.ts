import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { Call } from 'src/app/services/calls/call';
import { CallsService } from 'src/app/services/calls/calls.service';

@Component({
  selector: 'app-admin-calls',
  templateUrl: './admin-calls.component.html',
  styleUrls: ['./admin-calls.component.css']
})
export class AdminCallsComponent {

  templateId: number = 0;
  calls: Call[] = [];

  form: FormGroup = new FormGroup({
    array: new FormArray<FormGroup>([])
  });

  constructor(private callsService: CallsService, private router: ActivatedRoute) {
    router.params.subscribe((params) => {
      this.templateId = params['templateId'];
    })
   this.update();
  }

  update(): void {
    this.callsService.getAll(this.templateId).subscribe(data => {
      this.calls = this.sort(data.data);
    });
  }

  sort(arr: Call[]): Call[]{
    return arr.sort((a,b) => {
      return parseInt(a.lesson_number) - parseInt(b.lesson_number);
    })
  }


}
