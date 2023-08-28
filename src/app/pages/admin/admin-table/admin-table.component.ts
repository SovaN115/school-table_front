import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallsService } from 'src/app/services/calls/calls.service';
import { GroupsService } from 'src/app/services/groups/groups.service';
import { Table } from 'src/app/services/table/table';
import { TableService } from 'src/app/services/table/table.service';
import { TemplateService } from 'src/app/services/template/template.service';

@Component({
  selector: 'app-admin-table',
  templateUrl: './admin-table.component.html',
  styleUrls: ['./admin-table.component.css']
})
export class AdminTableComponent {

  rows: any[] = [];
  sections: Table[] = [];
  days: number = 0;
  lessons: any[] = [];

  displayTable: boolean = false;

  constructor(private tableService: TableService, private callsService: CallsService, private templateService: TemplateService, private groupsService: GroupsService, private router: ActivatedRoute){
    this.update();
  }

  update(){
    let templateId: number = 0;

    this.router.params.subscribe((params) => {
      templateId = params['templateId'];
    })

    this.templateService.getOne(templateId).subscribe((data) => {
      this.days = data.data.days; 
      this.lessons = new Array(data.data.lessons).fill(1);
      this.tableService.getAll(templateId).subscribe((data) => {
        let array = data.data;
  
        array.sort((a,b) => {
          return a.class.name.localeCompare(b.class.name) || a.day.id - b.day.id;
        })
  
        this.rows = array;
        console.log(this.rows[0])
        if(this.rows.length > 0){
          this.displayTable = true;
        }
      });
    })
  }
}
