import React from 'react';
import {MyPosts} from './Mypost/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileType} from '../../../App';

type ProfilePropsType = {
  profile: ProfileType
  addPost: (value: string) => void
}

export function Profile(props: ProfilePropsType) {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts posts={props.profile.posts} addPost={props.addPost}/>
    </div>
  )
}