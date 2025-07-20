import { Component } from '@angular/core';
import { TaskItem } from '../task-item/task-item';

@Component({
  selector: 'app-task-list',
  imports: [TaskItem],
  // templateUrl: './task-list.html',
  // styleUrl: './task-list.css'
  template: `
    <ul>
      @for(task of myTasks; track task.id) {
      <li>
        <app-task-item [task]="task"></app-task-item>
      </li>
      }
    </ul>
  `,
})
export class TaskList {
  myTasks = [
    { id: 0, description: 'buy groceries', priority: 'high' },
    { id: 1, description: 'go to work', priority: 'high' },
    { id: 2, description: 'walk the dog', priority: 'low' },
  ];
}
