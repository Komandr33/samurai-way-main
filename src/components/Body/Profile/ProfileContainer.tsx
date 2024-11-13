import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {AppRootStateType, useAppDispatch} from '../../../redux/store-redux';
import {getUserProfile, getUserProfileStatus, ProfileStateType,} from '../../../redux/profile-reducer';
import {Profile} from './Profile';
import {useParams} from 'react-router-dom';
import {widthAuthRedirect} from '../../../common/HOC/widthAuthRedirect';

export type ProfileContainerPropsType = ProfileStateType & mapDispatchToPropsType

type mapDispatchToPropsType = {
  getUserProfile: (userId: number) => void
  getUserProfileStatus: (userId: number) => void
}

const ProfileWrapper = (props: ProfileContainerPropsType) => {
  const dispatch = useAppDispatch();
  const params = useParams<{ userId: string }>()
  let userId = Number(params.userId)
  if (!userId) {
    userId = 2
  }

  useEffect(() => {
    if(userId) {
      dispatch(getUserProfile(userId));
    }
  }, [])

  return <Profile {...props}/>
}

const mapStateToProps = (state: AppRootStateType): ProfileStateType => {
  return {
    profile: state.profile.profile,
    posts: state.profile.posts,
    newPostText: state.profile.newPostText,
    status: state.profile.status
  }
}
export const ProfileContainer = connect(mapStateToProps, {
  getUserProfile,
  getUserProfileStatus
})(widthAuthRedirect(ProfileWrapper));

// export const ProfileContainer = compose(
//   connect(mapStateToProps, {getUserProfile}),
//   widthAuthRedirect,
// )(ProfileWrapper);