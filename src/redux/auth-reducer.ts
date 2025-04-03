import {Dispatch} from 'redux';
import {authAPI, AuthRequestType} from '../api/api';
import {AppThunkDispatch} from './store-redux';

type AuthActionType = ReturnType<typeof meAC> | ReturnType<typeof logoutAC>

export type AuthStateType = {
  id: number | null,
  email: string,
  login: string,
  isAuth: boolean,
  captcha?: boolean
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
    case 'LOGOUT':
      return initialState
    default:
      return state
  }
}

// actions
export const meAC = (data: AuthStateType) => {
  return {type: 'SET-AUTH-USER', data} as const
}

export const logoutAC = (isAuth: boolean) => {
  return {type: 'LOGOUT', isAuth} as const
}

// export const loginAC = (data: AuthRequestType) => {
//   return {type: 'LOGIN', data} as const
// }

// thunks

export const meTC = () => (dispatch: AppThunkDispatch) => {
  authAPI.me()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(meAC(data.data));
      }
    })
}

export const loginTC = (values: AuthRequestType) => (dispatch: AppThunkDispatch) => {
  authAPI.login(values)
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(meTC())
      }
    })
}

export const logoutTC = () => (dispatch: AppThunkDispatch) => {
  authAPI.logout()
    .then(data => {
      if (data.resultCode === 0) {
        dispatch(logoutAC(false));
      }
    })
}

