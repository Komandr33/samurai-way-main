import {v1} from 'uuid';
import {profileAPI} from '../api/api';
import {Dispatch} from 'redux';

export type PostType = {
  id: string
  message: string
  likes: number
}

type ProfileContactsType = {
  facebook: string | null
  github: string | null
  instagram: string | null
  mainLink: string | null
  twitter: string | null
  vk: string | null
  website: string | null
  youtube: string | null
}

export type ProfileType = {
  aboutMe: string
  contacts: ProfileContactsType
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  photos: {
    large: string
    small: string
  }
  userId: number
}

type ProfileReducerType =
  ReturnType<typeof updateText> |
  ReturnType<typeof addPost> |
  ReturnType<typeof setUserProfile>

export type ProfileStateType = {
  profile: ProfileType | null,
  posts: PostType[],
  newPostText: string
}

const ProfileState = {
  profile: null,
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
    case 'SET-USER-PROFILE':
      return {...state, profile: action.profile}
    default :
      return state
  }
}

//actions
export const updateText = (id: string, value: string) => {
  return {type: 'UPDATE-TEXT', id, value} as const
}
export const addPost = () => ({type: 'ADD-POST'}) as const
export const setUserProfile = (profile: ProfileType) => ({type: 'SET-USER-PROFILE', profile}) as const

//thunks
export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
  profileAPI.getProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data));
    }).catch(err => console.log(err.message))
}