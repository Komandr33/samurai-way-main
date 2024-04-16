import {v1} from 'uuid';

export type usersReducerType =
  ReturnType<typeof updateFollowedAC> |
  ReturnType<typeof updateUserStatusAC> |
  ReturnType<typeof updateUserLocationAC> |
  ReturnType<typeof addUserAC>

type LocationType = {
  city: string
  country: string
}
export type UsersType = {
  id: string
  followed: boolean
  userName: string
  status: string
  location: LocationType
}

const initialState = [
  {id: v1(), followed: true, userName: 'Andrey', status: 'i\'m Boss', location: {city: 'Krasnodar', country: 'Russia'}},
  {id: v1(), followed: false, userName: 'Dmitriy', status: 'i\'m Boss', location: {city: 'Baku', country: 'Georgia'}},
  {
    id: v1(),
    followed: true,
    userName: 'James Bond',
    status: 'i\'m Boss',
    location: {city: 'London', country: 'Britany'}
  },
]

export const usersReducer = (state: UsersType[] = initialState, action: usersReducerType): UsersType[] => {
  switch (action.type) {
    case 'UPDATE-FOLLOWED':
      return state.map(u => u.id === action.id ? {...u, followed: !u.followed} : u)
    case 'UPDATE-USER-STATUS':
      return state.map(u => u.id === action.id ? {...u, status: action.value} : u)
    case 'UPDATE-LOCATION':
      const user = {...state.find(u => u.id === action.id)}
      const newLocation = {...user.location, city: action.cityValue, country: action.countryValue}
      return state.map(u => u.id === action.id ? {...u, location: newLocation} : u)
    case 'ADD-USER':
      const newUser = {
        id: action.id,
        followed: false,
        userName: action.userName,
        status: action.statusValue,
        location: {city: action.cityValue, country: action.countryValue}
      }
      return [...state, newUser]
    default :
      return state
  }
}

export const updateFollowedAC = (id: string) => {
  return {type: 'UPDATE-FOLLOWED', id} as const
}
export const updateUserStatusAC = (id: string, value: string) => {
  return {type: 'UPDATE-USER-STATUS', id, value} as const
}
export const updateUserLocationAC = (id: string, cityValue: string, countryValue: string) => {
  return {type: 'UPDATE-LOCATION', id, cityValue, countryValue} as const
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