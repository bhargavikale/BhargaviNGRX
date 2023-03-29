import { createFeatureSelector, createSelector } from "@ngrx/store";
import { postsState } from "./post.state";



const getPostState = createFeatureSelector<postsState>('posts');
export const getPosts = createSelector(getPostState, (state)=>{
    return state.posts;
});

export const getPostById = createSelector(getPostState, (state,props)=>{
    return state.posts.find((post)=> post.id == props.id);
    
});