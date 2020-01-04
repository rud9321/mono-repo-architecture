import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPosts } from './posts';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  doSomething() {
    return ["red","blue","black","brown","yellow","vanilla"];
  }
  getPosts(): Observable<IPosts[]> {
    return this.http.get<IPosts[]>(this.postsUrl);
  }
  postUserDetail(user: User) {
    return this.http.post<User>(this.postsUrl, user);
  }

}
