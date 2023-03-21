import {createReducer,on} from '@ngrx/store';
import { addPost } from './post.action';
import {initialState} from './post.state';

const _postsreducer = createReducer(
    initialState,
    on (addPost,(state,action)=>{
        let post = {...action.post};
        post.id = state.posts.length+1;
        return{
            ...state,
            posts:[...state.posts,post],
        }
    })
    
)
export function postsReducer(state,action){
    return _postsreducer(state,action);
}