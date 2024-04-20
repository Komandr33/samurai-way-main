import React, {FC} from 'react';
import {User} from './User';
import s from './Users.module.css'
import {UsersPropsType} from './UsersContainer';

export const Users: FC<UsersPropsType> = (props) => {

  const toggleFollowed = (id: string) => {
    props.toggleFollowed(id)
  }

  return (
    <div className={s.item}>
      {props.usersPage.users.map(u => {
        return <User key={u.id} user={u} toggleFollowed={toggleFollowed}/>
      })}
    </div>
  );
};
