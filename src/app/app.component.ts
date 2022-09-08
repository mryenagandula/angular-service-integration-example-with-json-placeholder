import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public posts:any=[]

  constructor(private api : PostsService){}

  public ngOnInit(): void {
    this.api.getPosts().subscribe(res=>{
      console.log(res);
      this.posts= res;
    },
    error=>{
      console.log(error);
    })
  }
}
