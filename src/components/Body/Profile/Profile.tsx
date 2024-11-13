import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './Mypost/MyPostsContainer';
import {ProfileStateType} from '../../../redux/profile-reducer';

export function Profile(props: ProfileStateType) {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} />
      <MyPostsContainer/>
    </div>
  )
}