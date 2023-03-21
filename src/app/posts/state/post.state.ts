import {Post} from './../../model/posts.model';

export interface postsState{
    posts:Post[]
}
export const initialState:postsState = {
    posts:[
        {id:1, title:'Sample Title 1', description:'Sample description 1'},
        {id:2, title:'Sample Title 2', description:'Sample description 2'},
    ]
}