import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Group } from 'src/app/services/groups/group';
import { GroupsService } from 'src/app/services/groups/groups.service';

@Component({
  selector: 'app-admin-classes',
  templateUrl: './admin-classes.component.html',
  styleUrls: ['./admin-classes.component.css']
})
export class AdminClassesComponent {

  templateId: number = 0;
  groups: Group[] = [];

  constructor(private groupsServise: GroupsService, private router: ActivatedRoute){
    router.params.subscribe((params) => {
      this.templateId = params['templateId']
    })

    this.update();
  }

  update(){
    this.groupsServise.getAll(this.templateId).subscribe(data => {
      this.groups = data.data;
    });
  }

}
