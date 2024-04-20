import React from 'react';
import user_avatar from '../../../img/user_avatar.jpg';
import {UserType} from '../../../redux/users-reducer';

type UserPropsType = {
  user: UserType,
  toggleFollowed: (id: string) => void
}
export const User = (props: UserPropsType) => {

  // const user = {...props.user}

  return (
    <div>
      <img src={user_avatar} alt={'avatar'}/>
      <div>
        <div>{props.user.userName}</div>
        <div>{props.user.status}</div>
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
)
  ;
};
