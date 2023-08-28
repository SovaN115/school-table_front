import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cabinet } from 'src/app/services/cabinets/cabinet';
import { CabinetsService } from 'src/app/services/cabinets/cabinets.service';

@Component({
  selector: 'app-admin-cabinets',
  templateUrl: './admin-cabinets.component.html',
  styleUrls: ['./admin-cabinets.component.css']
})
export class AdminCabinetsComponent {
  cabinets: Cabinet[] = [];
  templateId: number = 0;

  constructor(private cabinetService: CabinetsService, private router: ActivatedRoute){

    router.params.subscribe((params => {
      this.templateId = params['templateId'];
    }));

    this.update();

  }

  update(): void {
    this.cabinetService.getAll(this.templateId).subscribe((data) => {
      this.cabinets = data.data;
    });
  }


}
