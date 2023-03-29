import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ImportState } from "@ngrx/store-devtools/src/actions";
//import { ParentCounterComponent } from "./counter/parent-counter/parent-counter.component";
import { HomeComponent } from "./home/home.component";
//import { AddPostComponent } from "./posts/add-post/add-post.component";
//import { EditPostComponent } from "./posts/edit-post/edit-post.component";
//import { PostsComponent } from "./posts/posts.component";
//import { PostsModule } from "./posts/posts.module";
import { AuthModule } from './Auth/auth.module'


const routes:Routes = [
    {path:'',component:HomeComponent},
    {path:'counter',loadChildren:()=>import('./counter/counter.module').then((m)=>m.CounterModule)},
    {path:'posts',loadChildren:()=> import('./posts/posts.module').then((m)=>m.PostsModule)},
    {path:'auth',loadChildren:()=>import('./Auth/auth.module').then((m)=>m.AuthModule)}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}