import {v1} from 'uuid';

type PostType = {
  id: string
  message: string
  likes: number
}

type ProfileReducerType = ReturnType<typeof updateTextAC> | ReturnType<typeof addPostAC>

export type ProfileStateType = typeof ProfileState

const ProfileState = {
  posts: [
    {id: v1(), message: 'Hello!!!', likes: 15},
    {id: v1(), message: 'Hello! How, are you?', likes: 20},
    {id: v1(), message: 'GO, GO, GO!!!', likes: 10},
    {id: v1(), message: 'Be happy!', likes: 5},
  ] as PostType[],
  newPostText: ''
}

export function profileReducer(state: ProfileStateType = ProfileState, action: ProfileReducerType): ProfileStateType {
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