import {postState} from '../store'
import {FETCH_POSTS} from '../actions/posts'
import {ADD_POSTS} from '../actions/posts'

const postsReducer = (state=postState, action)=>{
  if (action.type === FETCH_POSTS) {
    return{
      ...state,
      posts:action.payload
    }
  }
  if (action.type === ADD_POSTS) {
    return{
      ...state,
      posts:{status: action.payload.status, message:action.payload.data.message}
    }
  }
  return state
}

export default postsReducer
