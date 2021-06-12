import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './models/todo';
import { AuthService } from '../services/auth.service';
import { catchError, share } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Params } from '@angular/router';

@Injectable()
export class TodosService {
  query(query: any) {
    throw new Error('Method not implemented.');
  }

  url = 'http://localhost:3000/todos/'

  params = new BehaviorSubject<Params>({
    query:'',
    perpage:10,
    page: 1,
  })

  createTodo(todo: Partial<Todo>) {
    return this.http.post<Todo>(this.url, todo, {
      headers: {
        'Authorization': 'Bearer ' + this.auth.getToken()
      }
    }).pipe(
      share()
    )
  }

  queryTodo(query) {
    return this.http.get<Todo[]>(this.url, {
      params:{
        q:query
      }
    }).pipe(
      share()
    )
  }

  constructor(private http: HttpClient, private auth: AuthService) { }

}
