import { counterReducer } from "../counter-state/counter.reducer";
import { CounterState } from "../counter-state/counter.state";
import { postsReducer } from "../posts/state/post.reducer";
import { postsState } from "../posts/state/post.state";

export interface AppState{
    counter:CounterState;
    posts:postsState;
}

export const appReducer ={
    counter:counterReducer,
    posts:postsReducer
}