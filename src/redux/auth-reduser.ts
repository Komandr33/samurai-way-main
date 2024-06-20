type AuthActionType = ReturnType<typeof setAuthUser>

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

export const setAuthUser = (data: AuthStateType) => {
  return {type: 'SET-AUTH-USER', data} as const
}