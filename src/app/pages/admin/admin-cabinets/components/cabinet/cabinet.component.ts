import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CabinetsService } from 'src/app/services/cabinets/cabinets.service';

@Component({
  selector: '[admin-cabinet]',
  templateUrl: './cabinet.component.html',
  styleUrls: ['./cabinet.component.css']
})
export class CabinetComponent {
  @Input() id: number = 0;
  @Input() room: string = '';
  @Output() delete: EventEmitter<any> = new EventEmitter();

  constructor(private cabinetsService: CabinetsService){}

  onDelete() {
    this.cabinetsService.delete(this.id.toString()).subscribe(() =>{ 
      this.delete.emit();
    }
    )
  }
}
