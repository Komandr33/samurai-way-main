import React from 'react';
import user_avatar from '../../../assets/images/user_avatar.jpg';
import {UserType} from '../../../redux/users-reducer';
import {Link} from 'react-router-dom';
import {PATH} from '../../../App';
import {followAPI} from '../../../api/api';

type UserPropsType = {
  user: UserType,
  toggleFollowed: (id: number) => void
  toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
  followedInProgress: number[]
}
export const User = (props: UserPropsType) => {

  const followedOnClickHandler = () => {
    if (!props.user.followed) {
      props.toggleIsFollowingProgress(true, props.user.id)
      followAPI.addFollow(props.user.id)
        .then(data => {
          if (data.resultCode == 0) {
            props.toggleIsFollowingProgress(false, props.user.id)
            props.toggleFollowed(props.user.id)
          }
        })
    }
    if (props.user.followed) {
      props.toggleIsFollowingProgress(true, props.user.id)
      followAPI.deleteFollow(props.user.id)
        .then(data => {
          if (data.resultCode == 0) {
            props.toggleIsFollowingProgress(false, props.user.id)
            props.toggleFollowed(props.user.id)
          }
        })
    }
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
