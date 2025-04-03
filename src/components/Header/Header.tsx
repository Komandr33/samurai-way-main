import React from 'react';
import s from './Header.module.css'
import {HeaderContainerPropsType} from './HeaderContainer';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../App';
import {useAppDispatch} from '../../redux/store-redux';
import {logoutTC} from '../../redux/auth-reducer';

export function Header(props: HeaderContainerPropsType) {

  const dispatch = useAppDispatch()

  const logoutHandler = () => {
    dispatch(logoutTC());
  }

  return (
    <header className={s.header}>
      <img
        src="https://w1.pngwing.com/pngs/952/52/png-transparent-facebook-social-media-icons-multilaw-advertising-logo-internet-symbol-marketing-news-green.png"
        alt="logo"/>
      <div>{props.isAuth ?
        <div>
          {props.login}
          <button onClick={logoutHandler}>Logout</button>
        </div> :
        <NavLink to={PATH.LOGIN}>LOGIN</NavLink>}</div>
    </header>
  )
}