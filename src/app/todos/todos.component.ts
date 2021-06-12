import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';
import { TodosService } from './todos.service';

@Component({
  selector: 'todos',
  template: `
  <div class="row">
  <div class="col">
    <h3>Search Todos</h3>
    <div class="input-group mb-3">
      <input type="text" class="form-control" (keyup.enter)="search($event.target.value)" placeholder="Search ...">
    </div>
    <div class="list-group">
      <div class="list-group-item" *ngFor="let todo of todos | async">
        {{todo.title}}
      </div>
    </div>        
    <div class="input-group mt-3">
      <div class="input-group-append" >
        <div class="input-group-text">
          Ilość: {{ (todos | async)?.lenght }}
        </div>
      </div>
    </div>
  </div>
  <div class="col">  
    <div class="alert alert-danger" *ngIf="error">{{error}}</div>

    <h3>Create Todo</h3>
    <div class="form-group">
      <input type="text" class="form-control" #titleRef>
    </div>
    <button class="btn btn-success" (click)="addTodo(titleRef.value)">Add Todo</button>
  </div>
</div>
  `,
  styles: []
})
export class TodosComponent implements OnInit {

  todos:Observable<Todo[]>

  error: boolean;

  search(query) {
    this.todos = this.todosService.queryTodo(query)
   }

  addTodo(title){
   this.todosService.createTodo({
     title
   })
   .subscribe(()=>{
     console.log('success!')
   },err=>{
     this.error = err.mesage
   }, () => {
     console.log('compleated')
   })
  }

  constructor(public todosService:TodosService) { }

  ngOnInit() {
  }

}
