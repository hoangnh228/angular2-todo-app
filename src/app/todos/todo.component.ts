import { Component, OnInit } from '@angular/core';

import { Todo } from './todo';
import { TodoService } from './todo.service';

@Component({
  selector: 'todo-app',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoService]
})
export class TodoComponent implements OnInit {

  newTodo: Todo = new Todo();

  constructor(private todoService: TodoService) { }

  ngOnInit() {
  }

  get todos() {
    return this.todoService.getAllTodos();
  }

  addTodo() {
    this.todoService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  toggleTodoComplete(todo) {
    this.todoService.toggleTodoComplete(todo);
  }

  deleteTodo(todo) {
    this.todoService.deleteTodo(todo.id);
  }

}
