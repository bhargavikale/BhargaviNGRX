import { Component,OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Store } from '@ngrx/store';
import { changeText, customIncrement } from 'src/app/counter-state/counter.actions';
import { CounterState } from 'src/app/counter-state/counter.state';
import { getName } from 'src/app/counter-state/counter.selector';
@Component({
  selector: 'app-counter-custom-input',
  templateUrl: './counter-custom-input.component.html',
  styleUrls: ['./counter-custom-input.component.css']
})
export class CounterCustomInputComponent implements OnInit{
  inputValue:number;
  course:string;
  constructor(private store:Store<{counter:CounterState}>){
  }

  add(){
    this.store.dispatch(customIncrement({value:+this.inputValue}));
    this.inputValue=0;
  }

  ngOnInit():void{
    this.store.select(getName).subscribe((data)=>{
      console.log("textChanged");
      this.course = data;
    })
    
    
  }

  changeText(){
    this.store.dispatch(changeText());
    
  }
}
