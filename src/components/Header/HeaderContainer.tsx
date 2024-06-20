import React, {useEffect} from 'react';
import {Header} from './Header';
import axios from 'axios';
import {AuthStateType, setAuthUser} from '../../redux/auth-reduser';
import {connect} from 'react-redux';
import {AppPropsType} from '../../redux/store-redux';

export type HeaderContainerPropsType = AuthStateType & MapDispatchToPropsType
type MapDispatchToPropsType = {
  setAuthUser: (data: AuthStateType) => void
}

export function HeaderWrapper(props: HeaderContainerPropsType) {
  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(res => {
        if (res.data.resultCode === 0) {
          props.setAuthUser(res.data.data);
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