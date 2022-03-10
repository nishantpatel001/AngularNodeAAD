import { Todo } from './todo';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { protectedResources } from './auth-config';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUri = protectedResources.todoListApi.endpoint;
  todoListUrl = protectedResources.todoListApi.endpoint + '/todolist';
  graphUri = protectedResources.graphApi.endpoint;

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<string[]>(this.graphUri);
  }

  getCurrentUser() {
    return this.http.get<string[]>(this.apiUri + '/me');
  }

  getTodos() { 
    return this.http.get<Todo[]>(this.todoListUrl);
  }

  getTodo(id: number) { 
    return this.http.get<Todo>(this.todoListUrl + '/' + id);
  }
  
  postTodo(todo: Todo) { 
    return this.http.post<Todo>(this.todoListUrl, todo);
  }

  deleteTodo(id: number) {
    return this.http.delete(this.todoListUrl + '/' + id);
  }

  editTodo(todo: Todo) { 
    return this.http.put<Todo>(this.todoListUrl + '/' + todo.id, todo);
  }
}
