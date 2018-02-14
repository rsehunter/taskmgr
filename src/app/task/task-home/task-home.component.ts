import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task.task-home',
  templateUrl: './task.task-home.component.html',
  styleUrls: ['./task.task-home.component.scss']
})
export class TaskHomeComponent implements OnInit {

  lists = [
    {
      id:1,
      name: 'To do',
      tasks: [
        {
          id:1,
          desc:'1.egtrht',
          owner:{
            id:1,
            name:'rywhn',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
        },
        {
          id:2,
          desc:'2.egtrht',
          owner:{
            id:1,
            name:'rywhn',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
        }
      ]
    },
    {
      id:2,
      name: 'Ongoing',
      tasks: [
        {
          id:1,
          desc:'3.egtrht',
          owner:{
            id:1,
            name:'rywhn',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
        },
        {
          id:2,
          desc:'4.egtrht',
          owner:{
            id:1,
            name:'rywhn',
            avatar: 'avatars:svg-11'
          },
          dueDate: new Date(),
        }
      ]
    }

  ]
  constructor() { }

  ngOnInit() {
  }

}
