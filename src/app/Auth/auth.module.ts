import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";


const routes:Routes = [
    {path:'',children:[
        {path:'login',component:LoginComponent},
    ]}
]
@NgModule({
    declarations:[
        LoginComponent
    ],
    imports:[
        CommonModule,FormsModule,ReactiveFormsModule,RouterModule.forChild(routes)
    ]
})
export class AuthModule{

}