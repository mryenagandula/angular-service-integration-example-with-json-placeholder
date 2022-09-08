import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }

  public getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
