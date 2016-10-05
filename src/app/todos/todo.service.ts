import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {

  lastId: number = 0;
  todos: Todo[] = [];

  constructor() { }

  getAllTodos() : Todo[] {
    return this.todos;
  }

  getById(id: number) : Todo {
    return this.todos.filter(todo => todo.id === id).pop();
  }

  addTodo(todo: Todo) : TodoService {
    if (!todo.id) {
      todo.id = ++this.lastId;
    }

    this.todos.push(todo);

    return this;
  }

  updateTodo(id: number, values: Object = {}) : Todo {
    let todo = this.getById(id);

    if (!todo) {
      return null;
    }

    Object.assign(todo, values);

    return todo;
  }

  deleteTodo(id: number) : TodoService {
    this.todos = this.todos.filter(todo => todo.id !== id);

    return this;
  }

  toggleTodoComplete(todo: Todo) {
    let update = this.updateTodo(todo.id, {
      complete: !todo.complete
    });

    return update;
  }

}
