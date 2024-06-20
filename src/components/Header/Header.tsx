import React from 'react';
import s from './Header.module.css'
import {HeaderContainerPropsType} from './HeaderContainer';
import {NavLink} from 'react-router-dom';
import {PATH} from '../../App';

export function Header(props: HeaderContainerPropsType) {
  return (
    <header className={s.header}>
      <img
        src="https://w1.pngwing.com/pngs/952/52/png-transparent-facebook-social-media-icons-multilaw-advertising-logo-internet-symbol-marketing-news-green.png"
        alt="logo"/>
      <div>{props.isAuth ? props.login : <NavLink to={PATH.LOGIN}>LOGIN</NavLink>}</div>
    </header>
  )
}