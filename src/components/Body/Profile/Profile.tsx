import React from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {MyPostsContainer} from './Mypost/MyPostsContainer';


// type ProfilePropsType = {
//   profile: ProfileType,
//   collBack: (action: ActionType) => void,
// }

export function Profile() {

  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer/>
    </div>
  )
}