import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Cabinet } from 'src/app/services/cabinets/cabinet';
import { CabinetDTO } from 'src/app/services/cabinets/cabinetDTO';
import { CabinetsService } from 'src/app/services/cabinets/cabinets.service';

@Component({
  selector: 'app-cabinet-add',
  templateUrl: './cabinet-add.component.html',
  styleUrls: ['./cabinet-add.component.css']
})
export class CabinetAddComponent {

  templateId: number = 0;

  form: FormGroup = new FormGroup({
    cabinet: new FormControl('')
  });

  constructor(private cabinetsService: CabinetsService, private location: Location, private router: ActivatedRoute) {
    this.router.params.subscribe((params) => {
      this.templateId = params['templateId']
    })
  }

  onSubmit(): void {
    const room: string = this.form.value.cabinet;
    const cabinet: CabinetDTO = {room: room, template_id: this.templateId};
    this.cabinetsService.create(cabinet).subscribe((res: any) => {
      if(res.data) {
        this.location.back();
      }
    });
  }
}
