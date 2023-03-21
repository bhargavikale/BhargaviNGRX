import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ParentCounterComponent } from "./counter/parent-counter/parent-counter.component";
import { HomeComponent } from "./home/home.component";
import { AddPostComponent } from "./posts/add-post/add-post.component";
import { PostsComponent } from "./posts/posts.component";


const routes:Routes = [
    {path:'',component:HomeComponent},
    {path:'counter',component:ParentCounterComponent},
    {path:'posts',component:PostsComponent,children:[
        {path:'add',component:AddPostComponent}
    ]},
    {path:'**',component:HomeComponent},
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}