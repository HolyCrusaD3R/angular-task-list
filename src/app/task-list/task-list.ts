import { Component } from '@angular/core';
import { TaskItem } from '../task-item/task-item';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-task-list',
  imports: [TaskItem, ProductItem],
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
    @for(product of myProducts; track product.id) {
    <app-product-item [product]="product" />
    }
  `,
})
export class TaskList {
  myTasks = [
    { id: 0, description: 'buy groceries', priority: 'high' },
    { id: 1, description: 'go to work', priority: 'high' },
    { id: 2, description: 'walk the dog', priority: 'low' },
  ];

  myProducts = [
    {
      id: 0,
      src: 'https://m.media-amazon.com/images/I/710o0VupScL._AC_UL320_.jpg',
      isOutOfStock: false,
    },
    {
      id: 1,
      src: 'https://m.media-amazon.com/images/I/81D+bCgn8hL._AC_UL320_.jpg',
      isOutOfStock: true,
    },
  ];
}
