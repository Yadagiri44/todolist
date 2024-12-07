import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from "../model/todo.modal";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;  // Ensure it's properly passed

  @Output() delete = new EventEmitter<number>();
  @Output() edit = new EventEmitter<string>();

  isEditing = false;
  editedTask: string = this.todo?.task || '';  // Add default empty string

  ngOnChanges() {
    if (this.todo) {
      this.editedTask = this.todo.task;
    }
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;
    this.editedTask = this.todo?.task || ''; // Ensure the task exists
  }

  saveEdit() {
    if (this.editedTask) {
      this.edit.emit(this.editedTask);
      this.toggleEdit();
    }
  }

  deleteTodo() {
    this.delete.emit(this.todo?.id);  // Ensure todo exists before accessing
  }
}
