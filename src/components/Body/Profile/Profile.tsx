import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './Mypost/MyPostsContainer';
import {ProfileContainerPropsType} from './ProfileContainer';

export function Profile(props: ProfileContainerPropsType) {
  return (
    <div>
      <ProfileInfo profile={props.profile} status={props.status} updateProfileStatus={props.updateProfileStatus}/>
      <MyPostsContainer/>
    </div>
  )
}