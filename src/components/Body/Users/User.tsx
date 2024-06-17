import React from 'react';
import user_avatar from '../../../asstets/images/user_avatar.jpg';
import {UserType} from '../../../redux/users-reducer';
import {Link, useParams} from 'react-router-dom';
import {PATH} from '../../../App';

type UserPropsType = {
  user: UserType,
  toggleFollowed: (id: number) => void
  // setUserProfile: (userId: number) => void
}
export const User = (props: UserPropsType) => {

  return (
    <div>
      <Link
        to={`${PATH.PROFILE}/${props.user.id}`}
        // onClick={() => props.setUserProfile(props.user.id)}
      >
        <img src={props.user.photos.large || user_avatar} alt={'avatar'}/>
      </Link>
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
