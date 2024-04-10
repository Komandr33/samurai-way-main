import {ProfileType} from '../App';
import {v1} from 'uuid';
import {ActionType} from './store';



export const profileReducer = (state: ProfileType, action: ActionType) => {
  switch (action.type) {
    case 'UPDATE-TEXT':
      if (action.id === 'post') {
        return {...state, newPostText: action.value}
      }
      return state
    case 'ADD-POST':
      const newPost = {id: v1(), message: state.newPostText, likes: 0};
      state.newPostText = ''
      return {...state, posts: [...state.posts, newPost]}
    default :
      return state
  }
}

export const updateTextAC = (id: string, value: string) => {
  return {type: 'UPDATE-TEXT', id, value} as const
}
export const addPostAC = () => ({type: 'ADD-POST'}) as const