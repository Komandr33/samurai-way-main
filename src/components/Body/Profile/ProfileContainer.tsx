import React, {useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppPropsType} from '../../../redux/store-redux';
import {ProfileStateType, ProfileType, setUserProfile} from '../../../redux/profile-reducer';
import {Profile} from './Profile';
import {useParams} from 'react-router-dom';

const ProfileWrapper = (props: ProfileContainerPropsType) => {

  const params = useParams<{ userId: string }>()
  let userId = Number(params.userId)
  if (!userId) {
    userId = 2
  }

  useEffect(() => {
    if(userId) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
        .then(res => {
          console.log(res.data)
          props.setUserProfile(res.data)
        }).catch(err => console.log(err.message))
    }
  }, [])

  return <Profile {...props} profile={props.profile}/>
  // return <Profile profile={props.profile} posts={props.posts} newPostText={props.newPostText}/>
}

type ProfileContainerPropsType = ProfileStateType & mapDispatchToPropsType

const mapStateToProps = (state: AppPropsType): ProfileStateType => {
  return {
    profile: state.profile.profile,
    posts: state.profile.posts,
    newPostText: state.profile.newPostText
  }
}

type mapDispatchToPropsType = {
  setUserProfile: (profile: ProfileType) => void
}

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileWrapper);