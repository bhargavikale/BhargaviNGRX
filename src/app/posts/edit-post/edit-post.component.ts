import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Post } from 'src/app/model/posts.model';
import { AppState } from 'src/app/store/app.state';
import { getPostById } from '../state/post.selector';
import { updatePost } from '../state/post.action';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit{
  updatePostForm : FormGroup;
  post:Post; 
  
  constructor(private store:Store<AppState>, private route:ActivatedRoute, private router:Router){

  }
    
  
  ngOnInit():void{
    this.route.paramMap.subscribe((params)=>{
      const id = params.get('id');
      this.store.select(getPostById,{id}).subscribe((data)=>{
        this.post = data;
        this.createForm();
      });
      console.log(this.post);
    });
  }
  

  createForm(){
    this.updatePostForm = new FormGroup({
      title: new FormControl(this.post.title, [Validators.required,Validators.minLength(6)]),
      description: new FormControl(this.post.description, [Validators.required,Validators.minLength(10)]),
    })
  }

  OnUpdate(){
    if (this.updatePostForm.invalid){
      return;
    }
    const title = this.updatePostForm.value.title;
    const description = this.updatePostForm.value.description;


    const post:Post = {
      id:this.post.id,
      title,
      description
    }

    this.store.dispatch(updatePost({post}));
    this.router.navigate(['posts']);
  }
}
