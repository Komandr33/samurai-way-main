import React from 'react';
import user_avatar from '../../../assets/images/user_avatar.jpg';
import {setFollowed, UserType} from '../../../redux/users-reducer';
import {Link} from 'react-router-dom';
import {PATH} from '../../../App';
import {useAppDispatch} from '../../../redux/store-redux';

type UserPropsType = {
  user: UserType,
  followedInProgress: number[]
}
export const User = (props: UserPropsType) => {

  const dispatch = useAppDispatch();

  const followedOnClickHandler = () => {
    dispatch(setFollowed(props.user.id, props.user.followed));
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
          <button className={''} onClick={followedOnClickHandler}
                  disabled={props.followedInProgress.some(id => id === props.user.id)}>
            {!props.user.followed ? 'Добавить в друзья' : 'Удалить из друзей'}
          </button>
        </div>
      </div>
    </div>
  );
};
