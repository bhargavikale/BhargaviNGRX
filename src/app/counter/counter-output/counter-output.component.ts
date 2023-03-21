import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterState } from 'src/app/counter-state/counter.state';
import { getCounter } from 'src/app/counter-state/counter.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})
export class CounterOutputComponent implements OnInit{
  counter:number;
  //counter$:Observable<{counter:number}>;
  constructor(private store:Store<AppState>){

  }

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((data)=>{
      this.counter = data;
      console.log('Counter changed');
    })
  }
  /*ngOnInit(): void {
    this.counter$=this.store.select('counter');
    console.log('counter updated');
  }*/
}
