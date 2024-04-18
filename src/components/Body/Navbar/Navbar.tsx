import React from 'react';
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom';

export function Navbar() {
  return (
    <nav className={s.sidebar}>
      <div className={s.item}>
        <NavLink to="/profile" activeClassName={s.activeLink}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/news" activeClassName={s.activeLink}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/musics" activeClassName={s.activeLink}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/friends" activeClassName={s.activeLink}>Friends</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
      </div>
    </nav>
  )
}