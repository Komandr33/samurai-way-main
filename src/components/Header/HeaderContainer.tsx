import React, {useEffect} from 'react';
import {Header} from './Header';
import {AuthStateType, getAuthUserData} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {AppRootStateType, useAppDispatch} from '../../redux/store-redux';

export type HeaderContainerPropsType = AuthStateType & MapDispatchToPropsType

type MapDispatchToPropsType = {
  // setAuthUser: (data: AuthStateType) => void
}

export function HeaderWrapper(props: HeaderContainerPropsType) {

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getAuthUserData());
  }, [])

  return <Header {...props}/>
}

const mapStateToProps = (state: AppRootStateType): AuthStateType => {
  return {
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}

export const HeaderContainer = connect(mapStateToProps, {})(HeaderWrapper)