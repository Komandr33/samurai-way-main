import React from 'react';
import user_avatar from '../../../asstets/images/user_avatar.jpg';
import {UserType} from '../../../redux/users-reducer';

type UserPropsType = {
  user: UserType,
  toggleFollowed: (id: string) => void
}
export const User = (props: UserPropsType) => {

  return (
    <div>
      <img src={props.user.photos.small || user_avatar} alt={'avatar'}/>
      <div>
        <div>{props.user.name}</div>
        {/*<div>{props.user.status}</div>*/}
        <div>
          <button className={''} onClick={() => {
          }}>
            Написать сообщение
          </button>
        </div>
        <div>
          <button className={''} onClick={() => {
            props.toggleFollowed(props.user.id)
          }}>
            {!props.user.followed ? 'Добавить в друзья' : 'Удалить из друзей'}
          </button>
        </div>
      </div>
    </div>
  );
};
