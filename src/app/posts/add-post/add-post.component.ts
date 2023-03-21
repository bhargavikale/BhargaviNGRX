import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/model/posts.model';
import { AppState } from 'src/app/store/app.state';
import { addPost } from '../state/post.action';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit{
    postsForm : FormGroup;
    constructor(private store:Store<AppState>){

    }
    ngOnInit():void{
      this.postsForm = new FormGroup({
        title: new FormControl(null, [Validators.required,Validators.minLength(6)]),
        description: new FormControl(null, [Validators.required,Validators.minLength(10)]),
      })
    }
    OnSubmit(){
      const post:Post={
        title:this.postsForm.value.title,
        description:this.postsForm.value.description,
      };
      this.store.dispatch(addPost({post}));

      console.log(this.postsForm);
      
    }
}
