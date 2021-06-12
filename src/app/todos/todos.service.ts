import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Todo } from './models/todo';
import { AuthService } from '../services/auth.service';
import { catchError, filter, map, share, switchMap, tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { Params } from '@angular/router';

@Injectable()
export class TodosService {

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
      tap(()=>{
        this.params.next( this.params.getValue() )
      })
    )
  }

  setPerPage(perpage:number){
    this.params.next({
      ...this.params.getValue(),
      perpage
    })
  }

  setPage(page:number){
    this.params.next({
      ...this.params.getValue(),
      page
    })
  }

  state = {
    total: 0,
    pages: 1
  }

  setTotal(total:number){
    this.state = {
      total,
      pages: Math.ceil(total / this.params.getValue().perpage)
    }
  }

  query(query){
    this.params.next({
      ...this.params.getValue(),
      query
    })
  }

  totalCountHeader = 'X-Total-Count'

  getTodos() {
    return this.params.pipe(
      filter(params => !!params.query),
      switchMap( params => this.http.get<Todo[]>(this.url,{
        params:{
          q: params.query,
          _limit: ""+params.perpage,
          _page: ""+params.page
        },
        observe:'response',
        // reportProgress:true
        // responseType:'arraybuffer'
        // withCredentials:true
      })),
      map( (response:HttpResponse<Todo[]>) => {
        this.setTotal(parseInt(response.headers.get(this.totalCountHeader)))
        return response.body
      }),
      share()
    )
  } 

  constructor(private http: HttpClient, private auth: AuthService) { }

}
