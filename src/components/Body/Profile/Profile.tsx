import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './Mypost/MyPostsContainer';
import {PostType, ProfileType} from '../../../redux/profile-reducer';

type ProfilePropsType = {
  profile: ProfileType
  posts: PostType[]
  newPostText: string
}


export function Profile(props: ProfilePropsType) {
  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer/>
    </div>
  )
}