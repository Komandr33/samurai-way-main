import React from 'react';
import {MyPosts} from './Mypost/MyPosts';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileType} from '../../../App';

type ProfilePropsType = {
  profile: ProfileType,
  addPost: (value: string) => void,
  updateText: (id: string, value: string) => void
}

export function Profile(props: ProfilePropsType) {

  return (
    <div>
      <ProfileInfo/>
      <MyPosts updateText={props.updateText} posts={props.profile} addPost={props.addPost}/>
    </div>
  )
}