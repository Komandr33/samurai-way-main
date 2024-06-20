import React from 'react';
import user_avatar from '../../../asstets/images/user_avatar.jpg';
import {UserType} from '../../../redux/users-reducer';
import {Link} from 'react-router-dom';
import {PATH} from '../../../App';
import axios from 'axios';

type UserPropsType = {
  user: UserType,
  toggleFollowed: (id: number) => void
}
export const User = (props: UserPropsType) => {

  const authParams = {
    withCredentials: true,
    headers: {
      'API-KEY': '0df2c3a9-0b40-49a2-a2b8-e325c30c4e8e'
    }
  }

  const onClickHandler = () => {
    if (!props.user.followed) {
      axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, {}, authParams)
        .then(res => {
          if (res.data.resultCode == 0) {
            props.toggleFollowed(props.user.id)
          }
        })
    } 
    if (props.user.followed) axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.user.id}`, authParams)
      .then(res => {
        if (res.data.resultCode == 0) {
          props.toggleFollowed(props.user.id)
        }
      })

  }

  return (
    <div>
      <Link
        to={`${PATH.PROFILE}/${props.user.id}`}
      >
        <img src={props.user.photos.large || user_avatar} alt={'avatar'}/>
      </Link>
      <div>
        <div>{props.user.name}</div>
        <div>
          <button className={''} onClick={() => {
          }}>
            Написать сообщение
          </button>
        </div>
        <div>
          <button className={''} onClick={onClickHandler}>
            {!props.user.followed ? 'Добавить в друзья' : 'Удалить из друзей'}
          </button>
        </div>
      </div>
    </div>
  );
};
