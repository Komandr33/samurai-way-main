import React, {useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {AppPropsType} from '../../../redux/store-redux';
import {ProfileStateType, setUserProfile} from '../../../redux/profile-reducer';
import {Profile} from './Profile';
import {useParams} from 'react-router-dom';

const ProfileWrapper = (props: ProfileStateType) => {

  const params = useParams<{ userId: string }>()
  const id = Number(params.userId)

  useEffect(() => {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
      .then(res => {
        setUserProfile(res.data)
      })
  }, [])

  // return <Profile {...props}/>
  return <Profile profile={props.profile} posts={props.posts} newPostText={props.newPostText}/>
}

const mapStateToProps = (state: AppPropsType): ProfileStateType => {
  return {
    profile: state.profile.profile,
    posts: state.profile.posts,
    newPostText: state.profile.newPostText
  }
}

export const ProfileContainer = connect(mapStateToProps, {setUserProfile})(ProfileWrapper);