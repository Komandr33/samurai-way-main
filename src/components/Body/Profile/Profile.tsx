import React from 'react';
import {MyPosts} from './Mypost/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileType} from '../../../App';
import {ActionType} from '../../../redux/store';


type ProfilePropsType = {
  profile: ProfileType,
  collBack: (action: ActionType) => void,
}

export function Profile(props: ProfilePropsType) {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts collBack={props.collBack} posts={props.profile}/>
    </div>
  )
}