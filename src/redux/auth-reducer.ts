import {Dispatch} from 'redux';
import {authAPI} from '../api/api';

type AuthActionType = ReturnType<typeof setAuth>

export type AuthStateType = {
  id: number | null,
  email: string,
  login: string,
  isAuth: boolean
}

const initialState = {
  id: null,
  email: '',
  login: '',
  isAuth: false
}

export const authReducer = (state: AuthStateType = initialState, action: AuthActionType): AuthStateType => {
  switch (action.type) {
    case 'SET-AUTH-USER':
      return {...state, ...action.data, isAuth: true}
    default:
      return state
  }
}

// actions
export const setAuth = (data: AuthStateType) => {
  return {type: 'SET-AUTH-USER', data} as const
}

// thunks

export const getAuthUserData = () => (dispatch: Dispatch) => {
  authAPI.getIsAuth()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuth(data.data));
      }
    })
}