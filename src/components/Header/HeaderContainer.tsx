import React, {useEffect} from 'react';
import {Header} from './Header';
import {AuthStateType, setAuthUser} from '../../redux/auth-reduser';
import {connect} from 'react-redux';
import {AppPropsType} from '../../redux/store-redux';
import {authAPI} from '../../api/api';

export type HeaderContainerPropsType = AuthStateType & MapDispatchToPropsType
type MapDispatchToPropsType = {
  setAuthUser: (data: AuthStateType) => void
}

export function HeaderWrapper(props: HeaderContainerPropsType) {
  useEffect(() => {
    authAPI.getIsAuth()
      .then(data => {
        if (data.resultCode === 0) {
          props.setAuthUser(data.data);
        }
      })
  }, [])

  return <Header {...props}/>
}

const mapStateToProps = (state: AppPropsType): AuthStateType => {
  return {
    id: state.auth.id,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}

export const HeaderContainer = connect(mapStateToProps, {setAuthUser})(HeaderWrapper)