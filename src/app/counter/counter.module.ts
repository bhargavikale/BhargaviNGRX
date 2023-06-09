import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { counterReducer } from "../counter-state/counter.reducer";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CounterCustomInputComponent } from "./counter-custom-input/counter-custom-input.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { ParentCounterComponent } from "./parent-counter/parent-counter.component";


const routes:Routes = [
    {path:'',component:ParentCounterComponent}
]
@NgModule({
    declarations:[
        ParentCounterComponent,
        CounterOutputComponent,
        CounterButtonsComponent,
        CounterCustomInputComponent,
    ],
    imports:[CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ]
})
export class CounterModule{

}