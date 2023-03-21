import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import { increment,decrement,reset } from 'src/app/counter-state/counter.actions';
//import { CounterState } from 'src/app/counter-state/counter.state';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {
  constructor(private store:Store<AppState>){

  }
  onIncrement(){
    this.store.dispatch(increment());
    //console.log("increment works");
    
  }
  onDecrement(){
    this.store.dispatch(decrement());
    //console.log("decrement works");
    
  }
  onReset(){
    this.store.dispatch(reset());
    //console.log("reset works");
    
  }
}
