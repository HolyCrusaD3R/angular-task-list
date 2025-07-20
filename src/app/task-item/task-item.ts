import { Component, input } from '@angular/core';

@Component({
  selector: 'app-task-item',
  imports: [],
  template: `
    <div class="task-item" [class.background-red]="task().priority === 'high'">
      <h3>{{ task().description }}</h3>
    </div>
  `,
  styleUrl: './task-item.css',
})
export class TaskItem {
  task = input<any>();
}
