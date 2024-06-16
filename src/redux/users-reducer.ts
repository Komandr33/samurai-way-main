import {v1} from 'uuid';
import user_avatar from '../asstets/images/user_avatar.jpg'

type UsersReducerType =
  ReturnType<typeof setUser> |
  ReturnType<typeof addUser> |
  ReturnType<typeof deleteUser> |
  ReturnType<typeof toggleFollowed> |
  ReturnType<typeof updateUserStatus> |
  ReturnType<typeof updateUserLocation> |
  ReturnType<typeof setTotalCount> |
  ReturnType<typeof setCurrentPage> |
  ReturnType<typeof changeIsFetching>

type PhotosType = {
  small: string | null
  large: string | null
}

export type UserType = {
  name: string
  id: number
  photos: PhotosType
  status: string | null
  followed: boolean
}

export type UsersStateType = typeof usersState

const usersState = {
  users: [] as UserType[],
  pageSize: 100,
  totalCount: 0,
  currentPage: 1,
  isFetching: true
}

export function usersReducer(state: UsersStateType = usersState, action: UsersReducerType): UsersStateType {
  switch (action.type) {
    case 'SET-USER':
      return {...state, users: action.users}
    case 'ADD-USER':
      const newUser = {
        name: action.userName,
        id: action.id,
        photos: {small: user_avatar, large: null},
        followed: false,
        status: action.statusValue,
      }
      return {...state, users: [...state.users, newUser]}
    case 'DELETE-USER':
      return {...state, users: state.users.filter(u => u.id !== action.id)}
    case 'TOGGLE-FOLLOWED':
      return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: !u.followed} : u)}
    case 'UPDATE-USER-STATUS':
      return {...state, users: state.users.map(u => u.id === action.id ? {...u, status: action.value} : u)}
    case  'SET-TOTAL-COUNT':
      return {...state, totalCount: action.count}
    case 'SET-CURRENT-PAGE':
      return {...state, currentPage: action.currentPage}
    case 'CHANGE-IS-FETCHING':
      return {...state, isFetching: action.isFetching}
    // case 'UPDATE-LOCATION':
    //   const user = {...state.users.find(u => u.id === action.id)}
    //   const newLocation = {...user.location, city: action.cityValue, country: action.countryValue}
    //   return {...state, users: state.users.map(u => u.id === action.id ? {...u, location: newLocation} : u)}
    default :
      return state
  }
}

export const setUser = (users: UserType[]) => {
  return {type: 'SET-USER', users} as const
}
export const addUser = (userName: string, statusValue: string, cityValue: string, countryValue: string) => {
  return {
    type: 'ADD-USER',
    id: Math.floor(Math.random()* 1e20),
    userName,
    statusValue,
    countryValue
  } as const
}
export const deleteUser = (id: number) => {
  return {type: 'DELETE-USER', id} as const
}
export const toggleFollowed = (id: number) => {
  return {type: 'TOGGLE-FOLLOWED', id} as const
}
export const updateUserStatus = (id: number, value: string) => {
  return {type: 'UPDATE-USER-STATUS', id, value} as const
}
export const updateUserLocation = (id: number, cityValue: string, countryValue: string) => {
  return {type: 'UPDATE-LOCATION', id, cityValue, countryValue} as const
}
export const setTotalCount = (count: number) => {
  return {type: 'SET-TOTAL-COUNT', count} as const
}
export const setCurrentPage = (currentPage: number) => {
  return {type: 'SET-CURRENT-PAGE', currentPage} as const
}
export const changeIsFetching = (isFetching: boolean) => {
  return {type: 'CHANGE-IS-FETCHING', isFetching} as const
}

