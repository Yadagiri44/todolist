import { Component } from '@angular/core';
import { Todo } from "../model/todo.modal";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: Todo[] = [
    { id: 1, task: 'Buy groceries' },
    { id: 2, task: 'Clean the house' },
    { id: 3, task: 'Walk the dog' }
  ];

  addTodo(task: string) {
    const newTodo: Todo = { id: this.todos.length + 1, task };
    this.todos.push(newTodo);
   
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  editTodo(id: number, task: string) {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.task = task;
    }
  }
}

