import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './Mypost/MyPostsContainer';
import {PostType, ProfileType} from '../../../redux/profile-reducer';
import Preloader from '../../Preloader';

type ProfilePropsType = {
  profile?: ProfileType
  posts: PostType[]
  newPostText: string
}

export function Profile(props: ProfilePropsType) {

  if (!props.profile) {
    return <Preloader/>
  }

  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer/>
    </div>
  )
}