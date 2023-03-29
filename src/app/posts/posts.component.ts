import { Component, OnDestroy, OnInit } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Post } from '../model/posts.model';
import { AppState } from '../store/app.state';
import { getPosts } from './state/post.selector';
import { Observable } from 'rxjs';
import { deletePost } from './state/post.action';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit{
  constructor(private store:Store<AppState>){}


  posts:Observable<Post[]>;
  ngOnInit(): void {
    this.posts = this.store.select(getPosts);
    console.log(this.posts);
    
  }

  OnDelete(id:number){
    if (confirm('Are you sure you really want to delete')){
      this.store.dispatch(deletePost({id}));
    }
  }

}
