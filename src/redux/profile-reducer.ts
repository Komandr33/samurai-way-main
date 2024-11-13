import {v1} from 'uuid';
import {profileAPI} from '../api/api';
import {AppThunkDispatch} from './store-redux';

type ProfileReducerType =
  ReturnType<typeof updateText> |
  ReturnType<typeof addPost> |
  ReturnType<typeof setUserProfile> |
  ReturnType<typeof setUserProfileStatus>

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

export type PostType = {
  id: string
  message: string
  likes: number
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

export type ProfileStateType = {
  profile: ProfileType | null,
  posts: PostType[],
  newPostText: string,
  status: string | null
}

const ProfileState = {
  profile: null,
  posts: [
    {id: v1(), message: 'Hello!!!', likes: 15},
    {id: v1(), message: 'Hello! How, are you?', likes: 20},
    {id: v1(), message: 'GO, GO, GO!!!', likes: 10},
    {id: v1(), message: 'Be happy!', likes: 5},
  ] as PostType[],
  newPostText: '',
  status: null
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
    case 'SET-USER-PROFILE-STATUS':
      return {...state, status: action.status}
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
export const setUserProfileStatus = (status: string) => ({type: 'SET-USER-PROFILE-STATUS', status}) as const

//thunks
export const getUserProfile = (userId: number) => (dispatch: AppThunkDispatch) => {
  profileAPI.getProfile(userId)
    .then(data => {
      dispatch(setUserProfile(data));
      dispatch(getUserProfileStatus(userId));
    }).catch(err => console.log(err.message))
}

export const getUserProfileStatus = (userId: number) => (dispatch: AppThunkDispatch) => {
  profileAPI.getUserProfileStatus(userId)
    .then(data => {
      console.log(data)
      dispatch(setUserProfileStatus(data));
    }).catch(err => console.log(err.message))
}