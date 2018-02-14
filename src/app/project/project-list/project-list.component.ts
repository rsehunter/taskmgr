import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../new-project/new-project.component';
import { InviteComponent } from '../invite/invite.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects= [
    {
      "name": "1",
      "desc": "qergtwhyr",
      "coverImg": "asserts/img/covers/0.jpg"
    },
    {
      "name": "2",
      "desc": "gtwrtegb",
      "coverImg": "asserts/img/covers/1.jpg"
    }
  ]
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  openNewProjectDialog(){
    const dialogRef=this.dialog.open(NewProjectComponent,{data:'sent'} );
    dialogRef.afterClosed().subscribe(result => console.log(result));

  }
  launchInviteDialog(){
    const dialogRef=this.dialog.open(InviteComponent);

  }


}
