import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {TaskListComponent} from './task-list/task-list.component';
import {TaskHomeComponent} from './task-home/task-home.component';
import {TaskItemComponent} from './task-item/task-item.component';
import {TaskHeaderComponent} from './task-header/task-header.component';
import {TaskRoutingComponent} from './task-home/task-home.component';


@NgModule({
  imports: [
    SharedModule,
    TaskRoutingComponent
  ],
  declarations: [
    TaskHomeComponent,
    TaskListComponent,
    TaskItemComponent,
    TaskHeaderComponent
  ]
})
export class TaskModule { }
