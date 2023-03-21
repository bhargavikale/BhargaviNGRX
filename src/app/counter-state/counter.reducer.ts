
import {createReducer,on} from '@ngrx/store';
import { increment,decrement,reset, customIncrement, changeText } from './counter.actions';
import {initialState} from './counter.state';

const reducer = createReducer(
    initialState,
    on (increment,(state)=>{
        return{
            ...state,
            counter:state.counter+1
        }

    }),
    on (decrement,(state)=>{
        return{
            ...state,
            counter:state.counter-1
        }

    }),
    on (reset,(state)=>{
        return{
            ...state,
            counter:0
        }

    }),
    on (customIncrement,(state,action)=>{
        return{
            ...state,
            counter:state.counter+action.value
        }

    }),
    on (changeText,(state)=>{
        return{
            ...state,
            courseName:'Modified ngrx'
        }

    }),
    
    


)
export function counterReducer(state,action){
    return reducer(state,action);
}