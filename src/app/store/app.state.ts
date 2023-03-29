import { counterReducer } from "../counter-state/counter.reducer";
import { CounterState } from "../counter-state/counter.state";
import { postsReducer } from "../posts/state/post.reducer";
import { postsState } from "../posts/state/post.state";
import { AuthState } from "../Auth/state/state";
import { auth_reducer } from "../Auth/state/reducer";

export interface AppState{
    counter:CounterState;
    posts:postsState;
    Auth:AuthState;

}

export const appReducer ={
    counter:counterReducer,
    posts:postsReducer,
    auth:auth_reducer,
}