import { createReducer } from "@ngrx/store";
import { initialState } from "./state";

const _AuthReducer = createReducer(initialState);

export function auth_reducer(state,action){
    return _AuthReducer(state,action);
}