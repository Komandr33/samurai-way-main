import React from 'react';
import {MyPosts} from './Mypost/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileType} from '../../../App';

type ProfilePropsType = {
  profile: ProfileType
}

export function Profile(props: ProfilePropsType) {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.profile.posts}/>
    </div>
  )
}