import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cabinet } from 'src/app/services/cabinets/cabinet';
import { CabinetDTO } from 'src/app/services/cabinets/cabinetDTO';
import { CabinetsService } from 'src/app/services/cabinets/cabinets.service';

@Component({
  selector: 'app-cabinet-edit',
  templateUrl: './cabinet-edit.component.html',
  styleUrls: ['./cabinet-edit.component.css']
})
export class CabinetEditComponent {

  id: string = '';
  templateId = 0;

  form: FormGroup = new FormGroup({
    cabinet: new FormControl()
  });

  constructor(private cabinetsService: CabinetsService, private route: ActivatedRoute, private location: Location){
    route.params.subscribe(params => {
      this.id = params['cabinetId'];
      this.templateId = params['templateId']
    });
  }

  onSubmit(): void {
    const room: string = this.form.value.cabinet;
    const cabinet: CabinetDTO = {room: room, template_id: this.templateId};
    this.cabinetsService.patch(cabinet, this.id).subscribe(res => {
      res === null ? this.location.back() : console.log('ошибка')
    });
  }

}
