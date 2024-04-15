import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileType} from '../../../App';
import {ActionType} from '../../../redux/store';
import MyPostsContainer from './Mypost/MyPostsContainer';


type ProfilePropsType = {
  profile: ProfileType,
  collBack: (action: ActionType) => void,
}

export function Profile(props: ProfilePropsType) {

  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer/>
    </div>
  )
}