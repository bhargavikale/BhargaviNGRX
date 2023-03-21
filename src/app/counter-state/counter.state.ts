export interface CounterState{
    counter:number;
    courseName:string;
}

export const initialState : CounterState = {
    counter:0,
    courseName:'ngrx'
}