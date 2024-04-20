import {v1} from 'uuid';
import user_avatar from '../img/user_avatar.jpg'

type UsersReducerType =
  ReturnType<typeof setUserAC> |
  ReturnType<typeof addUserAC> |
  ReturnType<typeof deleteUserAC> |
  ReturnType<typeof toggleFollowedAC> |
  ReturnType<typeof updateUserStatusAC> |
  ReturnType<typeof updateUserLocationAC>

type LocationType = {
  city: string
  country: string
}
export type UserType = {
  id: string
  avatar: string
  followed: boolean
  userName: string
  status: string
  location: LocationType
}

export type UsersStateType = typeof usersState

const usersState = {
  users: [
    {
      id: v1(),
      avatar: user_avatar,
      followed: true,
      userName: 'Andrey',
      status: 'i\'m Boss',
      location: {city: 'Krasnodar', country: 'Russia'}
    },
    {
      id: v1(),
      avatar: user_avatar,
      followed: false,
      userName: 'Dmitriy',
      status: 'i\'m Boss',
      location: {city: 'Baku', country: 'Georgia'}
    },
    {
      id: v1(),
      avatar: user_avatar,
      followed: true,
      userName: 'James Bond',
      status: 'i\'m Boss',
      location: {city: 'London', country: 'Britany'}
    },
  ] as UserType[]
}

export function usersReducer(state: UsersStateType = usersState, action: UsersReducerType): UsersStateType {
  switch (action.type) {
    case 'SET-USER':
      return {...state, users: [...state.users, ...action.users]}
    case 'ADD-USER':
      const newUser = {
        id: action.id,
        avatar: user_avatar,
        followed: false,
        userName: action.userName,
        status: action.statusValue,
        location: {city: action.cityValue, country: action.countryValue}
      }
      return {...state, users: [...state.users, newUser]}
    case 'DELETE-USER':
      return {...state, users: state.users.filter(u => u.id !== action.id)}
    case 'TOGGLE-FOLLOWED':
      return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: !u.followed} : u)}
    case 'UPDATE-USER-STATUS':
      return {...state, users: state.users.map(u => u.id === action.id ? {...u, status: action.value} : u)}
    case 'UPDATE-LOCATION':
      const user = {...state.users.find(u => u.id === action.id)}
      const newLocation = {...user.location, city: action.cityValue, country: action.countryValue}
      return {...state, users: state.users.map(u => u.id === action.id ? {...u, location: newLocation} : u)}
    default :
      return state
  }
}

export const setUserAC = (users: UserType[]) => {
  return {type: 'SET-USER', users} as const
}
export const addUserAC = (userName: string, statusValue: string, cityValue: string, countryValue: string) => {
  return {
    type: 'ADD-USER',
    id: v1(),
    userName,
    statusValue,
    cityValue,
    countryValue
  } as const
}
export const deleteUserAC = (id: string) => {
  return {type: 'DELETE-USER', id} as const
}
export const toggleFollowedAC = (id: string) => {
  return {type: 'TOGGLE-FOLLOWED', id} as const
}
export const updateUserStatusAC = (id: string, value: string) => {
  return {type: 'UPDATE-USER-STATUS', id, value} as const
}
export const updateUserLocationAC = (id: string, cityValue: string, countryValue: string) => {
  return {type: 'UPDATE-LOCATION', id, cityValue, countryValue} as const
}
