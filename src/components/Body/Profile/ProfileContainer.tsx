import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {AppRootStateType, AppThunk, useAppDispatch} from '../../../redux/store-redux';
import {getProfile, ProfileStateType, updateProfileStatus,} from '../../../redux/profile-reducer';
import {Profile} from './Profile';
import {useParams} from 'react-router-dom';
import {widthAuthRedirect} from '../../../common/HOC/widthAuthRedirect';

export type ProfileContainerPropsType = ProfileStateType & mapDispatchToPropsType

type mapDispatchToPropsType = {
  // getProfile: (userId: number) => AnyAction
  // getProfileStatus: (userId: number) => AnyAction
  updateProfileStatus: (status: string) => AppThunk
}

const ProfileWrapper = (props: ProfileContainerPropsType) => {
  const dispatch = useAppDispatch();
  const params = useParams<{ userId: string }>()
  let userId = Number(params.userId)
  if (!userId) {
    userId = 30974
  }

  useEffect(() => {
    if(userId) {
      dispatch(getProfile(userId));
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
  updateProfileStatus
})(widthAuthRedirect(ProfileWrapper));

// export const ProfileContainer = compose(
//   connect(mapStateToProps, {getUserProfile}),
//   widthAuthRedirect,
// )(ProfileWrapper);